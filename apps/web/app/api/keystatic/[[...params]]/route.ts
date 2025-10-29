import { makeRouteHandler } from '@keystatic/next/route-handler'
import { NextRequest, NextResponse } from 'next/server'

// Prevent static generation at build time
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// Lazy initialization - only create route handler when actually called
// This prevents build-time failures when env vars are not set
let routeHandler: ReturnType<typeof makeRouteHandler> | null = null
let initializationError: Error | null = null

async function getRouteHandler() {
  // Return existing handler if already initialized
  if (routeHandler) {
    return routeHandler
  }
  
  // Return cached error if initialization already failed
  if (initializationError) {
    throw initializationError
  }
  
  // Try to initialize the handler - lazy load config to prevent build-time errors
  try {
    // Dynamically import config only when needed (at runtime, not build time)
    const { default: keystaticConfig } = await import('../../../../keystatic.config')
    
    routeHandler = makeRouteHandler({
      config: keystaticConfig,
    })
    return routeHandler
  } catch (error) {
    initializationError = error instanceof Error ? error : new Error(String(error))
    console.error('Failed to initialize Keystatic route handler:', error)
    console.error(
      'Make sure all required environment variables are set:\n' +
      '- KEYSTATIC_GITHUB_OWNER\n' +
      '- KEYSTATIC_GITHUB_REPO\n' +
      '- KEYSTATIC_GITHUB_CLIENT_ID\n' +
      '- KEYSTATIC_GITHUB_CLIENT_SECRET\n' +
      '- KEYSTATIC_SECRET\n' +
      '\nIf using GitHub mode, all of these are required. Otherwise, remove GitHub owner/repo to use local mode.'
    )
    throw initializationError
  }
}

// Fallback error handler
async function handleError(request: NextRequest, error: Error) {
  return NextResponse.json(
    { 
      error: 'Keystatic route handler not initialized. Please check your configuration and environment variables.',
      message: error.message || 'The Keystatic route handler failed to initialize. Check the server logs for details.'
    },
    { status: 500 }
  )
}

// Export handlers - lazy initialization on first request
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ params?: string[] }> }
) {
  try {
    const handler = await getRouteHandler()
    // Keystatic route handler only expects the request parameter
    return handler.GET(request)
  } catch (error) {
    return handleError(request, error instanceof Error ? error : new Error(String(error)))
  }
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ params?: string[] }> }
) {
  try {
    const handler = await getRouteHandler()
    // Keystatic route handler only expects the request parameter
    return handler.POST(request)
  } catch (error) {
    return handleError(request, error instanceof Error ? error : new Error(String(error)))
  }
}

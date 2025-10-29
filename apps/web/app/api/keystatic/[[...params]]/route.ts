import { makeRouteHandler } from '@keystatic/next/route-handler'
import keystaticConfig from '../../../../keystatic.config'
import { NextRequest, NextResponse } from 'next/server'

// Prevent static generation at build time
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

let routeHandler: ReturnType<typeof makeRouteHandler> | null = null

try {
  routeHandler = makeRouteHandler({
    config: keystaticConfig,
  })
} catch (error) {
  console.error('Failed to initialize Keystatic route handler:', error)
  // Log helpful error message
  console.error(
    'Make sure all required environment variables are set:\n' +
    '- KEYSTATIC_GITHUB_OWNER\n' +
    '- KEYSTATIC_GITHUB_REPO\n' +
    '- KEYSTATIC_GITHUB_CLIENT_ID\n' +
    '- KEYSTATIC_GITHUB_CLIENT_SECRET\n' +
    '- KEYSTATIC_SECRET\n' +
    '\nIf using GitHub mode, all of these are required. Otherwise, remove GitHub owner/repo to use local mode.'
  )
}

// Fallback error handler
async function handleError(request: NextRequest) {
  return NextResponse.json(
    { 
      error: 'Keystatic route handler not initialized. Please check your configuration and environment variables.',
      message: 'The Keystatic route handler failed to initialize. Check the server logs for details.'
    },
    { status: 500 }
  )
}

// Export handlers - use routeHandler if available, otherwise use error handler
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ params?: string[] }> }
) {
  if (!routeHandler) {
    return handleError(request)
  }
  
  return routeHandler.GET(request, context)
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ params?: string[] }> }
) {
  if (!routeHandler) {
    return handleError(request)
  }
  
  return routeHandler.POST(request, context)
}

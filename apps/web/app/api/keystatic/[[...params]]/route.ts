import { makeRouteHandler } from '@keystatic/next/route-handler'
import keystaticConfig from '../../../../keystatic.config'
import type { NextRequest } from 'next/server'

// Prevent static generation at build time
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const routeHandler = makeRouteHandler({
  config: keystaticConfig,
})

// makeRouteHandler returns an object with GET and POST methods for App Router
export async function GET(request: NextRequest) {
  if (routeHandler?.GET && typeof routeHandler.GET === 'function') {
    return routeHandler.GET(request)
  }
  
  // Log error only in development
  if (process.env.NODE_ENV === 'development') {
    console.error('[Keystatic Route] routeHandler.GET is not a function:', routeHandler)
  }
  
  return new Response(JSON.stringify({ 
    error: 'Route handler not configured',
    message: 'Keystatic API route handler is not available. Check environment variables and configuration.'
  }), {
    status: 500,
    headers: { 'Content-Type': 'application/json' }
  })
}

export async function POST(request: NextRequest) {
  if (routeHandler?.POST && typeof routeHandler.POST === 'function') {
    return routeHandler.POST(request)
  }
  
  return new Response(JSON.stringify({ error: 'Route handler not configured' }), {
    status: 500,
    headers: { 'Content-Type': 'application/json' }
  })
}

import { makeRouteHandler } from '@keystatic/next/route-handler'
import keystaticConfig from '../../../../keystatic.config'
import type { NextRequest } from 'next/server'

// Prevent static generation at build time
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const routeHandler = makeRouteHandler({
  config: keystaticConfig,
})

// Log what routeHandler contains
console.log('[Keystatic Route] routeHandler type:', typeof routeHandler)
console.log('[Keystatic Route] routeHandler keys:', routeHandler ? Object.keys(routeHandler) : 'null/undefined')
console.log('[Keystatic Route] routeHandler.GET type:', typeof routeHandler?.GET)
console.log('[Keystatic Route] routeHandler.POST type:', typeof routeHandler?.POST)

// makeRouteHandler returns an object with GET and POST methods for App Router
export async function GET(request: NextRequest) {
  console.log('[Keystatic Route] GET called for:', request.url)
  
  if (routeHandler?.GET && typeof routeHandler.GET === 'function') {
    console.log('[Keystatic Route] Calling routeHandler.GET')
    return routeHandler.GET(request)
  }
  
  console.error('[Keystatic Route] routeHandler.GET is not a function:', routeHandler)
  return new Response(JSON.stringify({ 
    error: 'Route handler not configured',
    debug: {
      handlerType: typeof routeHandler,
      hasGET: !!routeHandler?.GET,
      getType: typeof routeHandler?.GET
    }
  }), {
    status: 500,
    headers: { 'Content-Type': 'application/json' }
  })
}

export async function POST(request: NextRequest) {
  console.log('[Keystatic Route] POST called for:', request.url)
  
  if (routeHandler?.POST && typeof routeHandler.POST === 'function') {
    return routeHandler.POST(request)
  }
  
  return new Response(JSON.stringify({ error: 'Route handler not configured' }), {
    status: 500,
    headers: { 'Content-Type': 'application/json' }
  })
}

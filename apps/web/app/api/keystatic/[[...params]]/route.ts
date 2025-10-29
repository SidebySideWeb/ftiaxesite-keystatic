import { makeRouteHandler } from '@keystatic/next/route-handler'
import keystaticConfig from '../../../../keystatic.config'

// Prevent static generation at build time
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const routeHandler = makeRouteHandler({
  config: keystaticConfig,
})

// makeRouteHandler returns an object with GET and POST methods for App Router
export const GET = routeHandler.GET || routeHandler
export const POST = routeHandler.POST || routeHandler

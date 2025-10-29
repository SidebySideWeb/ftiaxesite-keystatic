import { makeRouteHandler } from '@keystatic/next/route-handler'
import keystaticConfig from '../../../../keystatic.config'

// Prevent static generation at build time
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const routeHandler = makeRouteHandler({
  config: keystaticConfig,
})

// makeRouteHandler returns handlers for App Router - export them directly
export const GET = routeHandler.GET
export const POST = routeHandler.POST

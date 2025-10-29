import { makeRouteHandler } from '@keystatic/next/route-handler'
import keystaticConfig from '../../../../keystatic.config'

const routeHandler = makeRouteHandler({
  config: keystaticConfig,
})

// makeRouteHandler returns an object with GET and POST methods for App Router
export const GET = routeHandler.GET
export const POST = routeHandler.POST

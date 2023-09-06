import { createServer } from "http"
import { createYoga } from "graphql-yoga"
import { schema } from "./schema"

const port = Number(process.env.API_PORT || 4000)
const yoga = createYoga({ schema });
const server = createServer(yoga);

server.listen(port, () => {
  console.info(`GraphQL Yoga is listening on http://localhost:${port}/graphql`)
})

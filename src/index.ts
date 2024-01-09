// src/index.ts

// 1
import { createServer } from "node:http";
import { createSchema, createYoga } from 'graphql-yoga'
import { schema } from "./schema";
// 2
const port = Number(process.env.API_PORT) || 4000
// 3
// const schema = createSchema({
//   typeDefs: /* GraphQL */ `
//     type Query {
//       hello: String
//     }
//   `,
//   resolvers: {
//     Query: {
//       hello: () => 'world'
//     }
//   },
// })
// 4
const yoga = createYoga({ schema })
// 5
const server = createServer(yoga);
// 6
server.listen(port, () => {
  console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`);
})
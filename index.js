import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import mergedTypeDef from "./typeDefs/index.js";
import mergedResolver from "./resolvers/index.js";

const server = new ApolloServer({
  typeDefs: mergedTypeDef,
  resolvers: mergedResolver,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀  Server ready at: ${url}`);

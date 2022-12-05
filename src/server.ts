import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { LibroResolver } from "./schema/Resolvers/Libro/LibroResolver";
import { UsuarioResolver } from "./schema/Resolvers/Usuario/UsuarioResolver";

export async function startServer() {

  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [LibroResolver, UsuarioResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res })
  });

  await server.start()
  
  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}
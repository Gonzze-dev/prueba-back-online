"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const LibroResolver_1 = require("./schema/Resolvers/Libro/LibroResolver");
const UsuarioResolver_1 = require("./schema/Resolvers/Usuario/UsuarioResolver");
const TemaResolver_1 = require("./schema/Resolvers/Tema/TemaResolver");
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const server = new apollo_server_express_1.ApolloServer({
            schema: yield (0, type_graphql_1.buildSchema)({
                resolvers: [LibroResolver_1.LibroResolver, UsuarioResolver_1.UsuarioResolver, TemaResolver_1.TemaResolver],
                validate: false
            }),
            context: ({ req, res }) => ({ req, res })
        });
        yield server.start();
        server.applyMiddleware({ app, path: "/graphql" });
        return app;
    });
}
exports.startServer = startServer;

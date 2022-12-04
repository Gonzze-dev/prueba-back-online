"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const cors_1 = __importDefault(require("cors"));
const schema_1 = require("./schema/schema");
const server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    graphiql: true,
    schema: schema_1.schema,
}));
exports.default = server;

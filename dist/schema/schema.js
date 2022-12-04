"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const rootQuery_1 = require("./Rooters/rootQuery");
const rootMutation_1 = require("./Rooters/rootMutation");
exports.schema = new graphql_1.GraphQLSchema({
    query: rootQuery_1.rootQuery,
    mutation: rootMutation_1.rootMutation,
});

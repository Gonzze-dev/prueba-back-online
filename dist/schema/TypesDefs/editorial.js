"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEditorial = void 0;
const graphql_1 = require("graphql");
exports.TEditorial = new graphql_1.GraphQLObjectType({
    name: 'editorial',
    fields: {
        id: { type: graphql_1.GraphQLID },
        nombre: { type: graphql_1.GraphQLString }
    }
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TPais = void 0;
const graphql_1 = require("graphql");
exports.TPais = new graphql_1.GraphQLObjectType({
    name: 'pais',
    fields: {
        id: { type: graphql_1.GraphQLID },
        nombre: { type: graphql_1.GraphQLString }
    }
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TAutor = void 0;
const graphql_1 = require("graphql");
exports.TAutor = new graphql_1.GraphQLObjectType({
    name: 'autor',
    fields: {
        id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
        nombre: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
    }
});

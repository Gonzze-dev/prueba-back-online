"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TProvincia = void 0;
const graphql_1 = require("graphql");
const pais_1 = require("./pais");
exports.TProvincia = new graphql_1.GraphQLObjectType({
    name: 'provincia',
    fields: {
        id: { type: graphql_1.GraphQLID },
        nombre: { type: graphql_1.GraphQLString },
        pais: { type: pais_1.TPais }
    }
});

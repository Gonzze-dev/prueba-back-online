"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TIdioma = void 0;
const graphql_1 = require("graphql");
exports.TIdioma = new graphql_1.GraphQLObjectType({
    name: 'idioma',
    fields: {
        id: { type: graphql_1.GraphQLID },
        nombre: { type: graphql_1.GraphQLString }
    }
});

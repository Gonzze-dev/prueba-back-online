"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ttema = void 0;
const graphql_1 = require("graphql");
exports.Ttema = new graphql_1.GraphQLObjectType({
    name: 'tema',
    fields: {
        id: { type: graphql_1.GraphQLID },
        nombre: { type: graphql_1.GraphQLString },
        url_imagen: { type: graphql_1.GraphQLString }
    }
});

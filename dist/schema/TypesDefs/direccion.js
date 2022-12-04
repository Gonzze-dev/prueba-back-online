"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TDireccion = void 0;
const graphql_1 = require("graphql");
const ciudad_1 = require("./ciudad");
exports.TDireccion = new graphql_1.GraphQLObjectType({
    name: 'direccion',
    fields: {
        id: { type: graphql_1.GraphQLID },
        direccion: { type: graphql_1.GraphQLString },
        infoAdicional: { type: graphql_1.GraphQLString },
        dni: { type: graphql_1.GraphQLInt },
        telefono: { type: graphql_1.GraphQLString },
        usuario: { type: graphql_1.GraphQLID },
        ciudad: { type: ciudad_1.TCiudad }
    }
});

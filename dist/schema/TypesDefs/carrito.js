"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TCarrito = void 0;
const graphql_1 = require("graphql");
const libro_1 = require("./libro");
exports.TCarrito = new graphql_1.GraphQLObjectType({
    name: 'carrito',
    fields: {
        nro_linea: { type: graphql_1.GraphQLID },
        cantidad: { type: graphql_1.GraphQLInt },
        libro: { type: libro_1.TLibro },
    }
});

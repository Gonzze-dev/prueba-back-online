"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOrden_detalle = void 0;
const graphql_1 = require("graphql");
const libro_1 = require("./libro");
exports.TOrden_detalle = new graphql_1.GraphQLObjectType({
    name: 'orden_detalle',
    fields: {
        id: { type: graphql_1.GraphQLID },
        precio: { type: graphql_1.GraphQLString },
        cantidad: { type: graphql_1.GraphQLFloat },
        id_orden: { type: graphql_1.GraphQLString },
        libro: { type: libro_1.TLibro },
    }
});

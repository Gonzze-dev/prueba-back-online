"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TUsuario = void 0;
const graphql_1 = require("graphql");
const carrito_1 = require("./carrito");
const libro_1 = require("./libro");
const orden_1 = require("./orden");
exports.TUsuario = new graphql_1.GraphQLObjectType({
    name: 'usuario',
    fields: {
        id: { type: graphql_1.GraphQLID },
        nombre: { type: graphql_1.GraphQLString },
        correo: { type: graphql_1.GraphQLString },
        contrasenia: { type: graphql_1.GraphQLString },
        admin: { type: graphql_1.GraphQLBoolean },
        favorito: { type: new graphql_1.GraphQLList(libro_1.TLibro) },
        orden: { type: new graphql_1.GraphQLList(orden_1.TOrden) },
        carrito: { type: new graphql_1.GraphQLList(carrito_1.TCarrito) }
    }
});

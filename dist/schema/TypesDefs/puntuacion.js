"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TPuntuacion = void 0;
const graphql_1 = require("graphql");
const libro_1 = require("./libro");
const usuario_1 = require("./usuario");
exports.TPuntuacion = new graphql_1.GraphQLObjectType({
    name: 'puntuacion',
    fields: () => ({
        usuario_libro: { type: graphql_1.GraphQLString },
        puntuacion: { type: graphql_1.GraphQLFloat },
        usuario: { type: usuario_1.TUsuario },
        libro: { type: libro_1.TLibro }
    })
});

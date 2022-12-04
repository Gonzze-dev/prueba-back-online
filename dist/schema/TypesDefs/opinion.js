"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOpinion = void 0;
const graphql_1 = require("graphql");
const libro_1 = require("./libro");
const usuario_1 = require("./usuario");
exports.TOpinion = new graphql_1.GraphQLObjectType({
    name: 'opinion',
    fields: () => ({
        usuario_libro: { type: graphql_1.GraphQLString },
        comentario: { type: graphql_1.GraphQLString },
        usuario: { type: usuario_1.TUsuario },
        libro: { type: libro_1.TLibro }
    })
});

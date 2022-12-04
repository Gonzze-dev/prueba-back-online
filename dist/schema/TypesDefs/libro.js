"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TLibro = void 0;
const graphql_1 = require("graphql");
const autor_1 = require("./autor");
const editorial_1 = require("./editorial");
const idioma_1 = require("./idioma");
const opinion_1 = require("./opinion");
const puntuacion_1 = require("./puntuacion");
const tema_1 = require("./tema");
exports.TLibro = new graphql_1.GraphQLObjectType({
    name: 'libro',
    fields: {
        isbn: { type: graphql_1.GraphQLID },
        url_imagen: { type: graphql_1.GraphQLString },
        titulo: { type: graphql_1.GraphQLString },
        fecha_edicion: { type: graphql_1.GraphQLString },
        precio: { type: graphql_1.GraphQLFloat },
        stock: { type: graphql_1.GraphQLInt },
        descripcion: { type: graphql_1.GraphQLString },
        fecha_ingreso: { type: graphql_1.GraphQLString },
        descuento: { type: graphql_1.GraphQLInt },
        idioma: { type: idioma_1.TIdioma },
        editorial: { type: editorial_1.TEditorial },
        autor: { type: new graphql_1.GraphQLList(autor_1.TAutor) },
        tema: { type: new graphql_1.GraphQLList(tema_1.Ttema) },
        opinion: { type: new graphql_1.GraphQLList(opinion_1.TOpinion) },
        puntuacion: { type: new graphql_1.GraphQLList(puntuacion_1.TPuntuacion) }
    }
});

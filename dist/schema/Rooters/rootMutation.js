"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootMutation = void 0;
const graphql_1 = require("graphql");
//USUARIO
const SignUp_1 = require("../Mutations/Usuario/SignUp");
const insertFav_1 = require("../Mutations/Usuario/insertFav");
const realizarCompra_1 = require("../Mutations/Usuario/realizarCompra");
//LIBRO
const insertLibro_1 = require("../Mutations/Libro/insertLibro");
//IDIOMA
//TEMA
//ATUOR
exports.rootMutation = new graphql_1.GraphQLObjectType({
    name: 'rootMutation',
    fields: {
        //USUARIO
        realizarCompra: realizarCompra_1.RealizarCompra,
        signUp: SignUp_1.SignUp,
        insertFav: insertFav_1.InsertFav,
        //LIBRO
        isnertLibro: insertLibro_1.InsertLibro
    }
});

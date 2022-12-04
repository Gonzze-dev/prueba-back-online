"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootQuery = void 0;
const graphql_1 = require("graphql");
//USUARIO
const login_1 = require("../Queries/Usuario/login");
//LIBRO
const getibros_1 = require("../Queries/Libro/getibros");
exports.rootQuery = new graphql_1.GraphQLObjectType({
    name: 'rootQuery',
    fields: {
        getLibros: getibros_1.Getlibros,
        login: login_1.Login
    }
});

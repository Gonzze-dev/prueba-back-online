"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TCiudad = void 0;
const graphql_1 = require("graphql");
const provincia_1 = require("./provincia");
exports.TCiudad = new graphql_1.GraphQLObjectType({
    name: 'ciudad',
    fields: {
        cp: { type: graphql_1.GraphQLString },
        nombre: { type: graphql_1.GraphQLString },
        provincia: { type: provincia_1.TProvincia }
    }
});

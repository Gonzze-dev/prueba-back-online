"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TCupon = void 0;
const graphql_1 = require("graphql");
exports.TCupon = new graphql_1.GraphQLObjectType({
    name: 'cupon',
    fields: {
        codigo_cupon: { type: graphql_1.GraphQLString },
        porc_descuento: { type: graphql_1.GraphQLFloat },
        utilizado: { type: graphql_1.GraphQLBoolean },
    }
});

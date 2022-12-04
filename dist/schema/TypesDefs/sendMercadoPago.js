"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMercadoPago = exports.jMercadoPago = void 0;
const graphql_1 = require("graphql");
const jMercadoPago = () => {
    return {
        message: "",
        success: false,
        status: 0,
        init_point: ''
    };
};
exports.jMercadoPago = jMercadoPago;
exports.sendMercadoPago = new graphql_1.GraphQLObjectType({
    name: `sendMercadoPago`,
    fields: {
        message: { type: graphql_1.GraphQLString },
        success: { type: graphql_1.GraphQLBoolean },
        status: { type: graphql_1.GraphQLString },
        init_point: { type: graphql_1.GraphQLString }
    }
});

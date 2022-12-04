"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSendUser = exports.jSendUser = void 0;
const graphql_1 = require("graphql");
const usuario_1 = require("./usuario");
const jSendUser = () => {
    return {
        message: "",
        success: false,
        status: 0,
        accessToken: '',
        usuario: {},
    };
};
exports.jSendUser = jSendUser;
exports.TSendUser = new graphql_1.GraphQLObjectType({
    name: `TSendUser`,
    fields: {
        message: { type: graphql_1.GraphQLString },
        success: { type: graphql_1.GraphQLBoolean },
        status: { type: graphql_1.GraphQLString },
        accessToken: { type: graphql_1.GraphQLString },
        usuario: { type: usuario_1.TUsuario }
    }
});

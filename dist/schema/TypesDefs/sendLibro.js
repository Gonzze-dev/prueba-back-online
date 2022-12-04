"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSendLibro = exports.jSendLibro = void 0;
const graphql_1 = require("graphql");
const libro_1 = require("./libro");
const jSendLibro = () => {
    return {
        message: "",
        success: false,
        status: 0,
        page: 0,
        totalPage: 0,
        libro: new Array
    };
};
exports.jSendLibro = jSendLibro;
exports.TSendLibro = new graphql_1.GraphQLObjectType({
    name: `sendLibro`,
    fields: {
        message: { type: graphql_1.GraphQLString },
        success: { type: graphql_1.GraphQLBoolean },
        status: { type: graphql_1.GraphQLString },
        page: { type: graphql_1.GraphQLInt },
        totalPage: { type: graphql_1.GraphQLInt },
        libro: { type: new graphql_1.GraphQLList(libro_1.TLibro) }
    }
});

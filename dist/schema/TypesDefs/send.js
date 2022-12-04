"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSend = exports.jSend = void 0;
const graphql_1 = require("graphql");
/*La existencia de la clase es para ahorrar codigo, debido a que todas
las respuestas tienen exactamente la misma extructura,
cambiando unicamente el objeto que retornan sus metodod
*/
const jSend = () => {
    return {
        message: "",
        success: false,
        status: 0,
        results: new Array
    };
};
exports.jSend = jSend;
const TSend = (metodName, TypeDef) => new graphql_1.GraphQLObjectType({
    name: `send_${metodName}`,
    fields: {
        message: { type: graphql_1.GraphQLString },
        success: { type: graphql_1.GraphQLBoolean },
        status: { type: graphql_1.GraphQLString },
        results: { type: TypeDef }
    }
});
exports.TSend = TSend;

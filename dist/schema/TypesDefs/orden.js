"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOrden = void 0;
const graphql_1 = require("graphql");
const cupon_1 = require("./cupon");
const direccion_1 = require("./direccion");
const orden_detalle_1 = require("./orden_detalle");
exports.TOrden = new graphql_1.GraphQLObjectType({
    name: 'orden',
    fields: {
        id: { type: graphql_1.GraphQLID },
        fecha: { type: graphql_1.GraphQLString },
        total: { type: graphql_1.GraphQLFloat },
        cupon: { type: cupon_1.TCupon },
        direccion_entrega: { type: direccion_1.TDireccion },
        orden_detalle: { type: new graphql_1.GraphQLList(orden_detalle_1.TOrden_detalle) }
    }
});

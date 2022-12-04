"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealizarCompra = void 0;
const graphql_1 = require("graphql");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../../../config");
const realizarCompra_1 = require("../../../ORM_Queries/Usuario/realizarCompra");
const sendMercadoPago_1 = require("../../TypesDefs/sendMercadoPago");
function fRealizarCompra(tokenUser) {
    return __awaiter(this, void 0, void 0, function* () {
        let msj = (0, sendMercadoPago_1.jMercadoPago)();
        try {
            const id = parseInt((0, jsonwebtoken_1.verify)(tokenUser, config_1.JWT_SECRET));
            const res = yield (0, realizarCompra_1.realizarCompra)(id);
            msj.message = "realizada con exito!";
            msj.success = true;
            msj.init_point = res.body.sandbox_init_point;
            return msj;
        }
        catch (err) {
            return msj;
        }
    });
}
exports.RealizarCompra = {
    type: sendMercadoPago_1.sendMercadoPago,
    args: {
        tokenUser: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield fRealizarCompra(args.tokenUser);
            return result;
        });
    },
};

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
exports.Login = void 0;
const graphql_1 = require("graphql");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../../../config");
const getUsuarioById_1 = require("../../../ORM_Queries/Usuario/getUsuarioById");
const login_1 = require("../../../ORM_Queries/Usuario/login");
const sendUser_1 = require("../../TypesDefs/sendUser");
function fGetUsuarioByCorreoYPassword(args) {
    return __awaiter(this, void 0, void 0, function* () {
        const msj = (0, sendUser_1.jSendUser)();
        try {
            const usuario = yield (0, login_1.login)(args.correo, args.contrasenia);
            const id_usuario = usuario[0].id.toString();
            msj.accessToken = (0, jsonwebtoken_1.sign)(id_usuario, config_1.JWT_SECRET);
            msj.success = true;
            msj.usuario = usuario[0];
            return msj;
        }
        catch (err) {
            return msj;
        }
    });
}
function fGetUsuarioByToken(tokenUser) {
    return __awaiter(this, void 0, void 0, function* () {
        let msj = (0, sendUser_1.jSendUser)();
        try {
            const id = parseInt((0, jsonwebtoken_1.verify)(tokenUser, config_1.JWT_SECRET));
            const usuario = yield (0, getUsuarioById_1.getUsuarioById)(id);
            msj.message = "Usuario obtenido con exito";
            msj.success = true;
            msj.accessToken = tokenUser;
            msj.usuario = usuario[0];
            return msj;
        }
        catch (err) {
            return msj;
        }
    });
}
function selectFunction(args) {
    return __awaiter(this, void 0, void 0, function* () {
        if (args.correo != '' && args.contrasenia != '') {
            return fGetUsuarioByCorreoYPassword(args);
        }
        else if (args.tokenUser != '') {
            return fGetUsuarioByToken(args.tokenUser);
        }
        return (0, sendUser_1.jSendUser)();
    });
}
exports.Login = {
    type: sendUser_1.TSendUser,
    args: {
        correo: { type: graphql_1.GraphQLString },
        contrasenia: { type: graphql_1.GraphQLString },
        tokenUser: { type: graphql_1.GraphQLString }
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield selectFunction(args);
            return result;
        });
    },
};

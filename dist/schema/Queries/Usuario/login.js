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
exports.selectLoginType = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../../../config");
const getUsuarioById_1 = require("../../../ORM_Queries/Usuario/getUsuarioById");
const login_1 = require("../../../ORM_Queries/Usuario/login");
const SendUsuario_1 = require("../../../SendTypes/SendUsuario");
function GetUsuarioByCorreoYPassword(args) {
    return __awaiter(this, void 0, void 0, function* () {
        const msj = new SendUsuario_1.SendUsuario();
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
function GetUsuarioByToken(tokenUser) {
    return __awaiter(this, void 0, void 0, function* () {
        const msj = new SendUsuario_1.SendUsuario();
        try {
            const id = parseInt((0, jsonwebtoken_1.verify)(tokenUser, config_1.JWT_SECRET));
            const usuario = yield (0, getUsuarioById_1.getUsuarioById)(id);
            msj.accessToken = tokenUser;
            msj.success = true;
            msj.usuario = usuario[0];
            return msj;
        }
        catch (err) {
            return msj;
        }
    });
}
function selectLoginType(args) {
    return __awaiter(this, void 0, void 0, function* () {
        if (args.correo != '' && args.contrasenia != '') {
            return yield GetUsuarioByCorreoYPassword(args);
        }
        else if (args.tokenUser != '') {
            return yield GetUsuarioByToken(args.tokenUser);
        }
        return new SendUsuario_1.SendUsuario();
    });
}
exports.selectLoginType = selectLoginType;

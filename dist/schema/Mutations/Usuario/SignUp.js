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
exports.SignUp = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../../../config");
const signUp_1 = require("../../../ORM_Queries/Usuario/signUp");
const SendUsuario_1 = require("../../../SendTypes/SendUsuario");
function SignUp(nombre, correo, contrasenia) {
    return __awaiter(this, void 0, void 0, function* () {
        const msj = new SendUsuario_1.SendUsuario();
        try {
            const usuario = yield (0, signUp_1.signUp)(nombre, correo, contrasenia);
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
exports.SignUp = SignUp;

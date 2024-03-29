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
exports.login = void 0;
const Usuario_1 = require("../../Entities/Usuario");
function login(correo, contrasenia) {
    return __awaiter(this, void 0, void 0, function* () {
        const arrayUsuario = yield Usuario_1.Usuario.find({
            relations: {
                orden: {
                    direccion_entrega: true
                },
                favorito: true,
                carrito: {
                    libro: true
                }
            },
            where: {
                correo: correo,
                contrasenia: contrasenia
            }
        });
        const usuario = arrayUsuario[0];
        if (usuario && usuario.carrito) {
            for (let i = 0; i < usuario.carrito.length; i++) {
                for (let j = 0; j < usuario.carrito.length; j++) {
                    if (usuario.carrito[i].libro.isbn = usuario.carrito[j].libro.isbn) {
                        usuario.carrito[i].cantidad = usuario.carrito[i].cantidad + (+usuario.carrito[i].cantidad);
                        usuario.carrito.splice(j, 1);
                    }
                }
            }
        }
        return arrayUsuario;
    });
}
exports.login = login;

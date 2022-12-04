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
exports.insertFav = void 0;
const Libro_1 = require("../../Entities/Libro");
const Usuario_1 = require("../../Entities/Usuario");
function insertFav(isbn, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const libro = yield Libro_1.Libro.find({
            where: {
                isbn: isbn
            }
        });
        let usuario = yield Usuario_1.Usuario.find({
            relations: {
                favorito: true
            },
            where: {
                id: id
            }
        });
        usuario[0].favorito.push(libro[0]);
        yield usuario[0].save();
        usuario = yield Usuario_1.Usuario.find({
            relations: {
                favorito: true
            },
            where: {
                id: id
            }
        });
        return usuario;
    });
}
exports.insertFav = insertFav;

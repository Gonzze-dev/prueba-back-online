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
exports.getElementByName = void 0;
const typeorm_1 = require("typeorm");
/*
obtienes un elemento de una entidad basica
como lo seria las entidades Tema, Autor, Idioma, Pais, Ciudad, Provincia,
etc...
*/
function getElementByName(nombre, entidad) {
    return __awaiter(this, void 0, void 0, function* () {
        const resultado = yield entidad.find({
            where: {
                nombre: (0, typeorm_1.ILike)(nombre)
            }
        });
        return resultado[0];
    });
}
exports.getElementByName = getElementByName;

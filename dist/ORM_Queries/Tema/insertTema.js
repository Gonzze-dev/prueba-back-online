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
exports.insertTema = void 0;
const Tema_1 = require("../../Entities/Tema");
const exists_1 = require("../Utilities/exists");
const getElementByName_1 = require("../Utilities/getElementByName");
function insertTema(tema) {
    return __awaiter(this, void 0, void 0, function* () {
        const existeTema = yield (0, exists_1.existsName)(tema.nombre, Tema_1.Tema);
        const obj_tema = new Tema_1.Tema();
        if (!existeTema) {
            obj_tema.nombre = tema.nombre;
            obj_tema.url_imagen = tema.url_imagen;
            yield obj_tema.save();
        }
        return yield (0, getElementByName_1.getElementByName)(tema.nombre, Tema_1.Tema);
    });
}
exports.insertTema = insertTema;

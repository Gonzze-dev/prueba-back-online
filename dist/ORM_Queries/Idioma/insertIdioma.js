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
exports.insertIdioma = void 0;
const Idioma_1 = require("../../Entities/Idioma");
const exists_1 = require("../Utilities/exists");
const getElementByName_1 = require("../Utilities/getElementByName");
function insertIdioma(nombreIdioma) {
    return __awaiter(this, void 0, void 0, function* () {
        const existeIdioma = yield (0, exists_1.existsName)(nombreIdioma, Idioma_1.Idioma);
        if (!existeIdioma) {
            const obj_idioma = new Idioma_1.Idioma();
            obj_idioma.nombre = nombreIdioma;
            yield obj_idioma.save();
        }
        return (0, getElementByName_1.getElementByName)(nombreIdioma, Idioma_1.Idioma);
    });
}
exports.insertIdioma = insertIdioma;

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
exports.insertAutor = void 0;
const Autor_1 = require("../../Entities/Autor");
const exists_1 = require("../Utilities/exists");
const getElementByName_1 = require("../Utilities/getElementByName");
function insertAutor(nombreAutor) {
    return __awaiter(this, void 0, void 0, function* () {
        const existeAutor = yield (0, exists_1.existsName)(nombreAutor, Autor_1.Autor);
        const obj_autor = new Autor_1.Autor();
        // const queryRunner = AppDataSource.createQueryRunner()
        // await queryRunner.connect()
        if (!existeAutor) {
            obj_autor.nombre = nombreAutor;
            yield obj_autor.save();
        }
        return yield (0, getElementByName_1.getElementByName)(nombreAutor, Autor_1.Autor);
    });
}
exports.insertAutor = insertAutor;

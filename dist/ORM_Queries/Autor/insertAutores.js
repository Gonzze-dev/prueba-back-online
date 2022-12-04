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
exports.insertAutores = void 0;
const InsertAutor_1 = require("./InsertAutor");
let autoresBd = [];
function insertAutores(autores) {
    return __awaiter(this, void 0, void 0, function* () {
        autores.forEach((autor) => __awaiter(this, void 0, void 0, function* () {
            autoresBd.push(yield (0, InsertAutor_1.insertAutor)(autor));
        }));
        return autoresBd;
    });
}
exports.insertAutores = insertAutores;

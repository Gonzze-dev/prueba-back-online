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
exports.insertTemas = void 0;
const insertTema_1 = require("./insertTema");
function insertTemas(temas) {
    return __awaiter(this, void 0, void 0, function* () {
        const temasBd = [];
        temas.forEach((tema) => __awaiter(this, void 0, void 0, function* () {
            temasBd.push(yield (0, insertTema_1.insertTema)(tema));
            console.log(yield temasBd);
        }));
        return temasBd;
    });
}
exports.insertTemas = insertTemas;

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
exports.getAllLibros = void 0;
const Libro_1 = require("../../Entities/Libro");
function getAllLibros() {
    return __awaiter(this, void 0, void 0, function* () {
        const libro = yield Libro_1.Libro.find(
        // {
        //     relations:
        //     {
        //         opinion:{
        //             usuario: false
        //         },
        //         puntuacion:{
        //             usuario: false
        //         }
        //     }
        // }
        );
        return libro;
    });
}
exports.getAllLibros = getAllLibros;

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
exports.InsertLibro = void 0;
const insertLibro_1 = require("../../../ORM_Queries/Libro/insertLibro");
const SendLibro_1 = require("../../../SendTypes/SendLibro");
function InsertLibro(isbn, imagen, titulo, fecha_edicion, precio, stock, descripcion, fecha_ingreso = '', descuento = 0, idioma, editorial, autor, temas) {
    return __awaiter(this, void 0, void 0, function* () {
        const msj = new SendLibro_1.SendLibro();
        try {
            const libro = yield (0, insertLibro_1.insertLibro)(isbn, imagen, titulo, fecha_edicion, precio, stock, descripcion, fecha_ingreso, descuento, idioma, editorial, autor, temas);
            msj.message = 'SE INSERTO EL LIBRO CON EXITO';
            msj.success = true;
            msj.status = 200;
            if (libro.isbn == null) {
                msj.message = 'LIBRO EXISTENTE';
                msj.success = false;
                msj.status = 400;
            }
            msj.libro.push(libro);
            return msj;
        }
        catch (err) {
            return err;
        }
    });
}
exports.InsertLibro = InsertLibro;

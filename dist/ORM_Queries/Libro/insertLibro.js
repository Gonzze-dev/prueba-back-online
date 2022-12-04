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
exports.insertLibro = void 0;
const Libro_1 = require("../../Entities/Libro");
const InsertAutor_1 = require("../Autor/InsertAutor");
const insertEditorial_1 = require("../Editorial/insertEditorial");
const insertIdioma_1 = require("../Idioma/insertIdioma");
const insertTema_1 = require("../Tema/insertTema");
const existsLibro_1 = require("./existsLibro");
function insertLibro(isbn, imagen, titulo, fecha_edicion, precio, stock, descripcion, fecha_ingreso, descuento, idioma, editorial, autor, tema) {
    return __awaiter(this, void 0, void 0, function* () {
        const exists = yield (0, existsLibro_1.existsLibro)(isbn);
        const obj_libro = new Libro_1.Libro();
        if (!exists) {
            obj_libro.isbn = isbn;
            obj_libro.url_imagen = imagen;
            obj_libro.titulo = titulo;
            obj_libro.fecha_edicion = fecha_edicion;
            obj_libro.precio = precio;
            obj_libro.stock = stock;
            obj_libro.descripcion = descripcion;
            if (fecha_ingreso) {
                obj_libro.fecha_ingreso = fecha_ingreso;
            }
            if (descuento) {
                obj_libro.descuento = descuento;
            }
            obj_libro.idioma = yield (0, insertIdioma_1.insertIdioma)(idioma);
            obj_libro.editorial = yield (0, insertEditorial_1.insertEditorial)(editorial);
            obj_libro.autor = [];
            autor.forEach((autor) => __awaiter(this, void 0, void 0, function* () {
                obj_libro.autor.push(yield (0, InsertAutor_1.insertAutor)(autor));
            }));
            obj_libro.tema = [];
            tema.forEach((tema) => __awaiter(this, void 0, void 0, function* () {
                obj_libro.tema.push(yield (0, insertTema_1.insertTema)(tema));
            }));
            yield obj_libro.save();
        }
        return obj_libro;
    });
}
exports.insertLibro = insertLibro;
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
function fUpdateLibro(isbnOriginal, isbn, imagen, titulo, fecha_edicion, precio, stock, descripcion, idioma, editorial, autor, tema) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return 'SE MODIFICO EL LIBRO CON EXITO';
        }
        catch (err) {
            return err;
        }
    });
}

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
exports.Getlibros = exports.fGetLibros = void 0;
const graphql_1 = require("graphql");
const getAllLibros_1 = require("../../../ORM_Queries/Libro/getAllLibros");
const getAllLibrosByCategoria_1 = require("../../../ORM_Queries/Libro/getAllLibrosByCategoria");
const getLibroByIsbn_1 = require("../../../ORM_Queries/Libro/getLibroByIsbn");
const getLibrosByReference_1 = require("../../../ORM_Queries/Libro/getLibrosByReference");
const sendLibro_1 = require("../../TypesDefs/sendLibro");
function selectFunction(args) {
    return __awaiter(this, void 0, void 0, function* () {
        if (args.categoria
            && args.categoria != '') {
            return yield (0, getAllLibrosByCategoria_1.getAllLibrosByCategoria)(args.categoria);
        }
        else if (args.isbn &&
            args.isbn != '') {
            return yield (0, getLibroByIsbn_1.getLibroByIsbn)(args.isbn);
        }
        else if (args.titulo
            && args.titulo != '') {
            return (0, getLibrosByReference_1.getLibrosByReference)(args.titulo);
        }
        return yield (0, getAllLibros_1.getAllLibros)();
    });
}
function fGetLibros(args) {
    return __awaiter(this, void 0, void 0, function* () {
        const msj = (0, sendLibro_1.jSendLibro)();
        try {
            const libro = yield selectFunction(args);
            msj.message = "Libros obtenidos con exito!";
            msj.success = true;
            msj.libro = libro;
            return msj;
        }
        catch (err) {
            return msj;
        }
    });
}
exports.fGetLibros = fGetLibros;
exports.Getlibros = {
    type: sendLibro_1.TSendLibro,
    args: {
        categoria: { type: graphql_1.GraphQLString },
        isbn: { type: graphql_1.GraphQLString },
        titulo: { type: graphql_1.GraphQLString }
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield fGetLibros(args);
            return result;
        });
    },
};

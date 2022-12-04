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
exports.UpdateLibro = void 0;
const graphql_1 = require("graphql");
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
exports.UpdateLibro = {
    type: graphql_1.GraphQLString,
    args: {
        isbnOriginal: { type: graphql_1.GraphQLInt },
        isbn: { type: graphql_1.GraphQLInt },
        imagen: { type: graphql_1.GraphQLString },
        titulo: { type: graphql_1.GraphQLString },
        fecha_edicion: { type: graphql_1.GraphQLString },
        precio: { type: graphql_1.GraphQLFloat },
        stock: { type: graphql_1.GraphQLInt },
        descripcion: { type: graphql_1.GraphQLString },
        idioma: { type: graphql_1.GraphQLInt },
        editorial: { type: graphql_1.GraphQLInt },
        autor: { type: new graphql_1.GraphQLList(graphql_1.GraphQLInt) },
        tema: { type: new graphql_1.GraphQLList(graphql_1.GraphQLInt) },
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield fUpdateLibro(args.isbnOriginal, args.isbn, args.imagen, args.titulo, args.fecha_edicion, args.precio, args.stock, args.descripcion, args.idioma, args.editorial, args.autor, args.tema);
            return result;
        });
    },
};

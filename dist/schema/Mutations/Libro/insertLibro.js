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
const graphql_1 = require("graphql");
const insertLibro_1 = require("../../../ORM_Queries/Libro/insertLibro");
const sendLibro_1 = require("../../TypesDefs/sendLibro");
function fInsertLibro(isbn, imagen, titulo, fecha_edicion, precio, stock, descripcion, fecha_ingreso, descuento, idioma, editorial, autor, temas) {
    return __awaiter(this, void 0, void 0, function* () {
        const msj = (0, sendLibro_1.jSendLibro)();
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
exports.InsertLibro = {
    type: sendLibro_1.TSendLibro,
    args: {
        isbn: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        imagen: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        titulo: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        fecha_edicion: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        precio: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat) },
        stock: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        descripcion: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        fecha_ingreso: { type: graphql_1.GraphQLString },
        descuento: { type: graphql_1.GraphQLInt },
        idioma: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        editorial: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        autor: { type: new graphql_1.GraphQLNonNull(new graphql_1.GraphQLList(graphql_1.GraphQLString)) },
        tema: { type: new graphql_1.GraphQLNonNull(new graphql_1.GraphQLList(graphql_1.GraphQLString)) },
        urlTema: { type: new graphql_1.GraphQLNonNull(new graphql_1.GraphQLList(graphql_1.GraphQLString)) }
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const temas = [];
            for (let index = 0; index < args.tema.length; index++) {
                temas.push({
                    nombre: args.tema[index],
                    url_imagen: args.urlTema[index]
                });
            }
            const result = yield fInsertLibro(args.isbn, args.imagen, args.titulo, args.fecha_edicion, args.precio, args.stock, args.descripcion, args.fecha_ingreso, args.descuento, args.idioma, args.editorial, args.autor, temas);
            return result;
        });
    },
};

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
exports.InsertFav = void 0;
const graphql_1 = require("graphql");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../../../config");
const insertFav_1 = require("../../../ORM_Queries/Usuario/insertFav");
const sendUser_1 = require("../../TypesDefs/sendUser");
function fInsertFav(isbn, tokenUser) {
    return __awaiter(this, void 0, void 0, function* () {
        let msj = (0, sendUser_1.jSendUser)();
        try {
            const id = parseInt((0, jsonwebtoken_1.verify)(tokenUser, config_1.JWT_SECRET));
            const usuario = yield (0, insertFav_1.insertFav)(isbn, id);
            msj.message = "Libro añadido a favoritos";
            msj.success = true;
            msj.accessToken = tokenUser;
            msj.usuario = usuario[0];
            return msj;
        }
        catch (err) {
            return msj;
        }
    });
}
exports.InsertFav = {
    type: sendUser_1.TSendUser,
    args: {
        isbn: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        tokenUser: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield fInsertFav(args.isbn, args.tokenUser);
            return result;
        });
    },
};

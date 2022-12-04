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
exports.GetTemaById = void 0;
const graphql_1 = require("graphql");
const tema_1 = require("../../TypesDefs/tema");
function fGetTemaById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = '';
            return response;
        }
        catch (err) {
            return err;
        }
    });
}
exports.GetTemaById = {
    type: tema_1.Ttema,
    args: {
        id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
    },
    resolve(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield fGetTemaById(args.id);
            return result;
        });
    },
};

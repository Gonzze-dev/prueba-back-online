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
require("reflect-metadata");
const server_1 = require("./server");
const Connection_1 = require("./Connection/Connection");
const puerto = Number(process.env.PORT);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            Connection_1.AppDataSource.initialize();
            const app = yield (0, server_1.startServer)();
            app.listen(puerto);
            console.log(`server on http://localhost:${puerto}/graphql`);
        }
        catch (err) {
            console.error(err);
        }
    });
}
main();

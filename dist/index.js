"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const Connection_1 = require("./Connection/Connection");
const config_1 = require("./config");
const puerto = Number(config_1.APP_PORT);
const main = () => {
    try {
        Connection_1.AppDataSource.initialize();
        server_1.default.listen(puerto);
        console.log(`server on http://localhost:${puerto}/graphql`);
    }
    catch (err) {
        console.error(err);
    }
};
main();

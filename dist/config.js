"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MERCADO_PAGO_TOKEN = exports.JWT_SECRET = exports.DB_NAME = exports.DB_PORT = exports.DB_HOST = exports.DB_PASSWORD = exports.DB_USERNAME = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.PORT = process.env.PORT || '3000';
exports.DB_USERNAME = process.env.DB_USERNAME || 'postgres';
exports.DB_PASSWORD = process.env.DB_PASSWORD || '1234';
exports.DB_HOST = process.env.DB_HOST || 'localhost';
exports.DB_PORT = process.env.DB_PORT || '5432';
exports.DB_NAME = process.env.DB_NAME || 'test';
exports.JWT_SECRET = process.env.JWT_SECRET || "4EDDE5877A29AC000";
exports.MERCADO_PAGO_TOKEN = process.env.MERCADO_PAGO_TOKEN || "TEST-102529111039618-111319-be2cad25aff0465082c188157129480d-184613295";

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("../config");
const Autor_1 = require("../Entities/Autor");
const Ciudad_1 = require("../Entities/Ciudad");
const Cupon_1 = require("../Entities/Cupon");
const Direccion_1 = require("../Entities/Direccion");
const Direccion_entrega_1 = require("../Entities/Direccion_entrega");
const Editorial_1 = require("../Entities/Editorial");
const Idioma_1 = require("../Entities/Idioma");
const Libro_1 = require("../Entities/Libro");
const Linea_carrito_1 = require("../Entities/Linea_carrito");
const Opinion_1 = require("../Entities/Opinion");
const Orden_1 = require("../Entities/Orden");
const Orden_detalle_1 = require("../Entities/Orden_detalle");
const Pais_1 = require("../Entities/Pais");
const Provincia_1 = require("../Entities/Provincia");
const Puntuacion_1 = require("../Entities/Puntuacion");
const Tema_1 = require("../Entities/Tema");
//Entities
const Usuario_1 = require("../Entities/Usuario");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: config_1.DB_HOST,
    port: Number(config_1.DB_PORT),
    username: config_1.DB_USERNAME,
    password: config_1.DB_PASSWORD,
    database: config_1.DB_NAME,
    entities: [Pais_1.Pais,
        Provincia_1.Provincia,
        Ciudad_1.Ciudad,
        Idioma_1.Idioma,
        Autor_1.Autor,
        Tema_1.Tema,
        Editorial_1.Editorial,
        Opinion_1.Opinion,
        Puntuacion_1.Puntuacion,
        Direccion_1.Direccion,
        Direccion_entrega_1.Direccion_entrega,
        Cupon_1.Cupon,
        Orden_1.Orden,
        Orden_detalle_1.Orden_detalle,
        Linea_carrito_1.Linea_carrito,
        Libro_1.Libro,
        Usuario_1.Usuario],
    synchronize: true,
    logging: true,
});

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Libro_1 = require("./Libro");
const Linea_carrito_1 = require("./Linea_carrito");
const Opinion_1 = require("./Opinion");
const Orden_1 = require("./Orden");
const Puntuacion_1 = require("./Puntuacion");
let Usuario = class Usuario extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({
        unique: true
    }),
    __metadata("design:type", String)
], Usuario.prototype, "correo", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "contrasenia", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({
        default: false
    }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "admin", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [Libro_1.Libro], { nullable: true }),
    (0, typeorm_1.ManyToMany)((type) => Libro_1.Libro, {
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinTable)({
        name: "favorito",
        joinColumn: {
            name: 'id_usuario'
        },
        inverseJoinColumn: {
            name: 'isbn'
        }
    }),
    __metadata("design:type", Array)
], Usuario.prototype, "favorito", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => Opinion_1.Opinion, opinion => opinion.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "opinion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => Puntuacion_1.Puntuacion, puntuacion => puntuacion.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "puntuacion", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [Orden_1.Orden], { nullable: true }),
    (0, typeorm_1.OneToMany)((type) => Orden_1.Orden, orden => orden.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "orden", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [Linea_carrito_1.Linea_carrito], { nullable: true }),
    (0, typeorm_1.OneToMany)((type) => Linea_carrito_1.Linea_carrito, linea_carrito => linea_carrito.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "carrito", void 0);
Usuario = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Usuario);
exports.Usuario = Usuario;

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
exports.Linea_carrito = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Libro_1 = require("./Libro");
const Usuario_1 = require("./Usuario");
let Linea_carrito = class Linea_carrito extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Linea_carrito.prototype, "nro_linea", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Linea_carrito.prototype, "cantidad", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => Libro_1.Libro),
    (0, typeorm_1.ManyToOne)((type) => Libro_1.Libro, (libro) => libro.isbn, {
        onUpdate: 'CASCADE',
        eager: true
    }),
    __metadata("design:type", Libro_1.Libro)
], Linea_carrito.prototype, "libro", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Usuario_1.Usuario, {
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario' }),
    __metadata("design:type", Usuario_1.Usuario)
], Linea_carrito.prototype, "usuario", void 0);
Linea_carrito = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Linea_carrito);
exports.Linea_carrito = Linea_carrito;

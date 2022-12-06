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
exports.Puntuacion = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Libro_1 = require("./Libro");
const Usuario_1 = require("./Usuario");
let Puntuacion = class Puntuacion extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Puntuacion.prototype, "usuario_libro", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Int, { nullable: true }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Puntuacion.prototype, "puntuacion", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => Usuario_1.Usuario, { nullable: true }),
    (0, typeorm_1.ManyToOne)((type) => Usuario_1.Usuario, {
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario' }),
    __metadata("design:type", Usuario_1.Usuario)
], Puntuacion.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Libro_1.Libro, {
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'isbn' }),
    __metadata("design:type", Libro_1.Libro)
], Puntuacion.prototype, "libro", void 0);
Puntuacion = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Puntuacion);
exports.Puntuacion = Puntuacion;

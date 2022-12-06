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
exports.Orden_detalle = void 0;
const typeorm_1 = require("typeorm");
const Orden_1 = require("./Orden");
const Libro_1 = require("./Libro");
const type_graphql_1 = require("type-graphql");
let Orden_detalle = class Orden_detalle extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.ID, { nullable: true }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Orden_detalle.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Float, { nullable: true }),
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 9,
        scale: 2,
    }),
    __metadata("design:type", Number)
], Orden_detalle.prototype, "precio", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Int, { nullable: true }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Orden_detalle.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Orden_1.Orden, {
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id_orden' }),
    __metadata("design:type", Orden_1.Orden)
], Orden_detalle.prototype, "orden", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [Libro_1.Libro], { nullable: true }),
    (0, typeorm_1.ManyToOne)((type) => Libro_1.Libro, (libro) => libro.isbn, {
        onUpdate: 'CASCADE',
        eager: true
    }),
    (0, typeorm_1.JoinColumn)({ name: 'isbn' }),
    __metadata("design:type", Array)
], Orden_detalle.prototype, "libro", void 0);
Orden_detalle = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Orden_detalle);
exports.Orden_detalle = Orden_detalle;

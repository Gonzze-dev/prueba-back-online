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
exports.Orden = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Cupon_1 = require("./Cupon");
const Direccion_entrega_1 = require("./Direccion_entrega");
const Orden_detalle_1 = require("./Orden_detalle");
const Usuario_1 = require("./Usuario");
let Orden = class Orden extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Orden.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => String),
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", Date)
], Orden.prototype, "fecha", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Float),
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 18,
        scale: 2,
    }),
    __metadata("design:type", Number)
], Orden.prototype, "total", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => Cupon_1.Cupon, { nullable: true }),
    (0, typeorm_1.OneToOne)((type) => Cupon_1.Cupon, {
        onUpdate: 'CASCADE',
        eager: true
    }),
    (0, typeorm_1.JoinColumn)({ name: 'codigo_cupon' }),
    __metadata("design:type", Cupon_1.Cupon)
], Orden.prototype, "cupon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Usuario_1.Usuario, {
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario' }),
    __metadata("design:type", Usuario_1.Usuario)
], Orden.prototype, "usuario", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => Direccion_entrega_1.Direccion_entrega, { nullable: true }),
    (0, typeorm_1.ManyToOne)((type) => Direccion_entrega_1.Direccion_entrega, (direccion) => direccion.id, {
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id_direccion_entrega' }),
    __metadata("design:type", Direccion_entrega_1.Direccion_entrega)
], Orden.prototype, "direccion_entrega", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => Orden_detalle_1.Orden_detalle, { nullable: true }),
    (0, typeorm_1.OneToMany)(() => Orden_detalle_1.Orden_detalle, (orden_detalle) => orden_detalle.orden, {
        onUpdate: 'CASCADE',
        eager: true
    }),
    __metadata("design:type", Array)
], Orden.prototype, "orden_detalle", void 0);
Orden = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Orden);
exports.Orden = Orden;

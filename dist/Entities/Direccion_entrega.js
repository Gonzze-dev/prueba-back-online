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
exports.Direccion_entrega = void 0;
const typeorm_1 = require("typeorm");
const Ciudad_1 = require("./Ciudad");
const Usuario_1 = require("./Usuario");
let Direccion_entrega = class Direccion_entrega extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Direccion_entrega.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Direccion_entrega.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true
    }),
    __metadata("design:type", String)
], Direccion_entrega.prototype, "infoAdicional", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Direccion_entrega.prototype, "dni", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true
    }),
    __metadata("design:type", String)
], Direccion_entrega.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Usuario_1.Usuario, {
        onUpdate: 'CASCADE'
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario' }),
    __metadata("design:type", Usuario_1.Usuario)
], Direccion_entrega.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Ciudad_1.Ciudad, {
        onUpdate: 'CASCADE',
        eager: true
    }),
    (0, typeorm_1.JoinColumn)({ name: 'cp' }),
    __metadata("design:type", Ciudad_1.Ciudad)
], Direccion_entrega.prototype, "ciudad", void 0);
Direccion_entrega = __decorate([
    (0, typeorm_1.Entity)()
], Direccion_entrega);
exports.Direccion_entrega = Direccion_entrega;

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
exports.Direccion = void 0;
const typeorm_1 = require("typeorm");
const Ciudad_1 = require("./Ciudad");
const Usuario_1 = require("./Usuario");
let Direccion = class Direccion extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Direccion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Direccion.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true
    }),
    __metadata("design:type", String)
], Direccion.prototype, "infoAdicional", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Direccion.prototype, "dni", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true
    }),
    __metadata("design:type", String)
], Direccion.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => Usuario_1.Usuario, {
        onUpdate: 'CASCADE',
        eager: true
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario' }),
    __metadata("design:type", Usuario_1.Usuario)
], Direccion.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Ciudad_1.Ciudad, {
        onUpdate: 'CASCADE',
        eager: true
    }),
    (0, typeorm_1.JoinColumn)({ name: 'cp' }),
    __metadata("design:type", Ciudad_1.Ciudad)
], Direccion.prototype, "cp", void 0);
Direccion = __decorate([
    (0, typeorm_1.Entity)()
], Direccion);
exports.Direccion = Direccion;

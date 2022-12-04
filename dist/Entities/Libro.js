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
exports.Libro = void 0;
const typeorm_1 = require("typeorm");
const Autor_1 = require("./Autor");
const Editorial_1 = require("./Editorial");
const Idioma_1 = require("./Idioma");
const Opinion_1 = require("./Opinion");
const Puntuacion_1 = require("./Puntuacion");
const Tema_1 = require("./Tema");
let Libro = class Libro extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Libro.prototype, "isbn", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Libro.prototype, "url_imagen", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Libro.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Libro.prototype, "fecha_edicion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 10,
        scale: 2,
    }),
    __metadata("design:type", Number)
], Libro.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Libro.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Libro.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", Date)
], Libro.prototype, "fecha_ingreso", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 4,
        scale: 2,
        nullable: true
    }),
    __metadata("design:type", Number)
], Libro.prototype, "descuento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Editorial_1.Editorial, (editorial) => editorial.id, {
        onUpdate: 'CASCADE',
        eager: true
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'id_editorial'
    }),
    __metadata("design:type", Editorial_1.Editorial)
], Libro.prototype, "editorial", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Idioma_1.Idioma, (idioma) => idioma.id, {
        onUpdate: 'CASCADE',
        eager: true
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'id_idioma',
    }),
    __metadata("design:type", Idioma_1.Idioma)
], Libro.prototype, "idioma", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => Tema_1.Tema, {
        onUpdate: 'CASCADE',
        eager: true
    }),
    (0, typeorm_1.JoinTable)({
        name: "asignar_tema",
        joinColumn: {
            name: 'isbn'
        },
        inverseJoinColumn: {
            name: 'id_tema'
        }
    }),
    __metadata("design:type", Array)
], Libro.prototype, "tema", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => Autor_1.Autor, {
        onUpdate: 'CASCADE',
        eager: true
    }),
    (0, typeorm_1.JoinTable)({
        name: "escrito_por",
        joinColumn: {
            name: 'isbn'
        },
        inverseJoinColumn: {
            name: 'id_autor',
        }
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'id_autor',
    }),
    __metadata("design:type", Array)
], Libro.prototype, "autor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => Opinion_1.Opinion, opinion => opinion.libro, {
        eager: true
    }),
    __metadata("design:type", Array)
], Libro.prototype, "opinion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => Puntuacion_1.Puntuacion, puntuacion => puntuacion.libro, {
        eager: true
    }),
    __metadata("design:type", Array)
], Libro.prototype, "puntuacion", void 0);
Libro = __decorate([
    (0, typeorm_1.Entity)()
], Libro);
exports.Libro = Libro;

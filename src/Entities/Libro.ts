import { Field, Float, ID, Int, ObjectType } from "type-graphql";

import { BaseEntity,
        Column, 
        Entity, 
        JoinColumn, 
        JoinTable, 
        ManyToMany, 
        ManyToOne, 
        OneToMany,
        PrimaryColumn } from "typeorm";
import { Autor } from "./Autor";
    
import { Editorial } from "./Editorial";
import { Idioma } from "./Idioma";
import { Opinion } from "./Opinion";
import { Puntuacion } from "./Puntuacion";
import { Tema } from "./Tema";

@ObjectType()
@Entity()
export class Libro extends BaseEntity
{
    
    @Field(type => ID)
    @PrimaryColumn()
    isbn!: string;

    @Field()
    @Column('text')
    url_imagen!: string;

    @Field()
    @Column()
    titulo!: string;

    @Field()
    @Column()
    fecha_edicion!: string;

    @Field(type => Float)
    @Column({
        type: 'decimal',
        precision: 10, 
        scale: 2,
    })
    precio!: number;

    @Field(type => Int)
    @Column()
    stock!: number;

    @Field()
    @Column()
    descripcion!: string;

    @Field(type => String)
    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    fecha_ingreso!: Date;

    @Field(type => Float)
    @Column({
        type: 'decimal',
        precision: 4, 
        scale: 2,
        nullable: true
    })
    descuento: number;

    @Field(type => Editorial)
    @ManyToOne(() => Editorial, (editorial) => editorial.id,
    {
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinColumn({
        name: 'id_editorial'
    })
    editorial!: Editorial;

    @Field(type => Idioma)
    @ManyToOne(() => Idioma, (idioma) => idioma.id,
        {
            onUpdate: 'CASCADE',
            eager: true
        })
    @JoinColumn({
        name: 'id_idioma',
    })
    idioma!: Idioma;

    @Field(type => [Tema])
    @ManyToMany((type) => Tema, {
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinTable({
        name: "asignar_tema",
        joinColumn: {
            name: 'isbn'
        },
        inverseJoinColumn: {
            name: 'id_tema'
        }
    })
    tema!: Tema[];

    @Field(type => [Autor])
    @ManyToMany((type) => Autor, {
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinTable({
        name: "escrito_por",
        joinColumn: {
            name: 'isbn'
        },
        inverseJoinColumn: {
            name: 'id_autor',
        }
    })
    @JoinColumn({
        name: 'id_autor',
    })
    autor!: Autor[];
    
    @Field(type => [Opinion], {nullable: true})
    @OneToMany((type) => Opinion, opinion => opinion.libro, {
        eager: true
    })
    public opinion?: Opinion[];

    @Field(type => [Puntuacion], {nullable: true})
    @OneToMany((type) => Puntuacion, puntuacion => puntuacion.libro, {
        eager: true
    })
    puntuacion?: Puntuacion[];
}

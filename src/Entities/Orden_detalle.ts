import { BaseEntity,
        Column,
        Entity,
        JoinColumn,
        ManyToOne,
        PrimaryGeneratedColumn} from "typeorm";

import { Orden } from "./Orden";
import { Libro } from "./Libro";
import { Field, Float, ID, Int, ObjectType } from "type-graphql";
import { type } from "os";

@ObjectType()
@Entity()
export class Orden_detalle extends BaseEntity
{
    
    @Field(type => ID, {nullable: true})
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(type => Float, {nullable: true})
    @Column({
        type: 'decimal',
        precision: 9, 
        scale: 2,
    })
    precio!: number;

    @Field(type => Int, {nullable: true}) 
    @Column()
    cantidad!: number;

    @ManyToOne((type) => Orden, {
        onUpdate: 'CASCADE',
    })
    @JoinColumn({name: 'id_orden'})
    orden!: Orden;

    @Field(type => [Libro], {nullable: true})
    @ManyToOne((type) => Libro, (libro) => libro.isbn, {
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinColumn({name: 'isbn'})
    libro!: Libro[];
}

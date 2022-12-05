
import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity,
        Column, 
        Entity, 
        JoinColumn, 
        ManyToOne, 
        PrimaryGeneratedColumn } from "typeorm"
import { Libro } from "./Libro"
import { Usuario } from "./Usuario"

@ObjectType()
@Entity()
export class Linea_carrito extends BaseEntity
{
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    nro_linea!: number;

    @Field(type => String)
    @Column()
    cantidad!: number;
    
    @Field(type => Libro)
    @ManyToOne((type) => Libro, (libro) => libro.isbn, {
        onUpdate: 'CASCADE',
        eager: true
    })
    libro: Libro;

    @ManyToOne((type) => Usuario, {
        onUpdate: 'CASCADE',
    })
    @JoinColumn({name: 'id_usuario'})
    usuario: Usuario;

}
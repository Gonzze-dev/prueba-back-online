import { Field, ID, ObjectType } from 'type-graphql';
import {BaseEntity,
        Column, 
        Entity, 
        PrimaryGeneratedColumn} from 'typeorm'

@ObjectType()
@Entity()
export class Pais extends BaseEntity
{

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    nombre!: string;
}
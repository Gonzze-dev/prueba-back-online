import { ArgsType, Field, Float, Int } from "type-graphql";

@ArgsType()
export class ArgsGetLibro {
    @Field()
    categoria: string = '';

    @Field()
    isbn: string = '';

    @Field()
    titulo: string = '';
}

@ArgsType()
export class ArgsInsertLibro
{
    @Field()
    isbn: string

    @Field()
    imagen: string

    @Field()
    titulo: string

    @Field()
    fecha_edicion: string

    @Field(type => Float)
    precio: number

    @Field(type => Int)
    stock: number

    @Field()
    descripcion: string

    @Field({nullable: true})
    fecha_ingreso?: string

    @Field(type => Float, {nullable: true})
    descuento?: number

    @Field()
    idioma: string

    @Field()
    editorial: string

    @Field(type => [String])
    autor: Array<string>

    @Field(type => [String])
    tema: Array<string>

    @Field(type => [String])
    url_imagen_tema: Array<string>
}

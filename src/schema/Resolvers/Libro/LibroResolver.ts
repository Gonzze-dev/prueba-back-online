import { Resolver, Args, Query, Mutation } from "type-graphql";
import { Libro } from "../../../Entities/Libro";
import { SendLibro } from "../../../SendTypes/SendLibro";
import { InsertLibro } from "../../Mutations/Libro/insertLibro";
import { GetLibros } from "../../Queries/Libro/getibros";
import { ArgsGetLibro, ArgsInsertLibro } from "./argsDefs";

@Resolver()
export class LibroResolver
{
    @Query(() => SendLibro)
    async getLibro(@Args() args: ArgsGetLibro)
    {
        return await GetLibros(args);
    }

    @Mutation(() => SendLibro)
    async insertLibro(@Args() {isbn, 
                                imagen,
                                titulo,
                                fecha_edicion,
                                precio,
                                stock,
                                descripcion,
                                fecha_ingreso = '',
                                descuento,
                                idioma,
                                editorial,
                                autor,
                                tema,
                                url_imagen_tema}: ArgsInsertLibro)
    {
        let temas = []

        for (let index = 0; index < tema.length; index++) {
            temas.push({
                nombre: tema[index],
                url_imagen: url_imagen_tema[index] 
            });
        }

        return await InsertLibro(isbn, 
                                imagen,
                                titulo,
                                fecha_edicion,
                                precio,
                                stock,
                                descripcion,
                                fecha_ingreso,
                                descuento, 
                                idioma,
                                editorial,
                                autor,
                                temas);
    }
}
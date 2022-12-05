import { AppDataSource } from "../../Connection/Connection";
import { Libro } from "../../Entities/Libro"
import { insertAutor } from "../Autor/InsertAutor";
import { insertEditorial } from "../Editorial/insertEditorial";
import { insertIdioma } from "../Idioma/insertIdioma";
import { insertTema } from "../Tema/insertTema";
import { existsLibro } from "./existsLibro"

export async function insertLibro(isbn: string,
                                    imagen: string,
                                    titulo: string,
                                    fecha_edicion: string,
                                    precio: number,
                                    stock: number,
                                    descripcion: string,
                                    fecha_ingreso: string = '',
                                    descuento: number = 0,
                                    idioma: string,
                                    editorial: string,
                                    autor: Array<string>,
                                    tema: Array<any>)
{

    const exists = await existsLibro(isbn)
    const obj_libro = new Libro();

    if (!exists)
    {
        obj_libro.isbn = isbn;
        obj_libro.url_imagen = imagen;
        obj_libro.titulo = titulo;
        obj_libro.fecha_edicion = fecha_edicion;
        obj_libro.precio = precio;
        obj_libro.stock = stock;
        obj_libro.descripcion = descripcion;

        if (fecha_ingreso)
        {
            obj_libro.fecha_ingreso = new Date(fecha_ingreso);
        }
        if (descuento > 0)
        {
            obj_libro.descuento = descuento;
        }

        obj_libro.idioma = await insertIdioma(idioma);
        obj_libro.editorial = await insertEditorial(editorial);

        obj_libro.autor = []
        autor.forEach(async autor => {
            obj_libro.autor.push(await insertAutor(autor));
        });
        
        obj_libro.tema = []
        tema.forEach(async tema => {
            obj_libro.tema.push(await insertTema(tema));
        });

        await obj_libro.save()
    }

    return obj_libro
}
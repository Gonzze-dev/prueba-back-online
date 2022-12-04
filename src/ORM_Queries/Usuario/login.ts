import { Usuario } from "../../Entities/Usuario";

export async function login(correo: string, contrasenia: string) 
{
    const usuario = await Usuario.find(
        {
            relations:{
                orden: {
                    direccion_entrega: {
                        ciudad: {
                            provincia:{
                                pais: true
                            }
                        }
                    }
                },
                favorito: true,
                carrito: {
                    libro: true
                },
            },
            where:
            {
                correo: correo,
                contrasenia: contrasenia
            }
        }
    )

    return usuario
}
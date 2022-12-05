import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config"
import { insertFav } from "../../../ORM_Queries/Usuario/insertFav";
import { SendUsuario } from "../../../SendTypes/SendUsuario";

export async function InsertFav(isbn: string, tokenUser: string) {
	const msj = new SendUsuario()

	try {
		const id = parseInt(<string>verify(tokenUser, JWT_SECRET))
		const usuario = await insertFav(isbn, id);

		msj.message = "Libro añadido a favoritos"
		msj.success = true;
		msj.accessToken = tokenUser;
		msj.usuario = usuario[0];
		
		return msj;
	} catch (err) {
		
		return msj;
	}
}

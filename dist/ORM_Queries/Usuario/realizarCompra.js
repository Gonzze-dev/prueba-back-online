"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.realizarCompra = void 0;
const config_1 = require("../../config");
const getCarritoUsuario_1 = require("./getCarritoUsuario");
const mercadopago = require("mercadopago");
function getItems(usuario) {
    let items = [];
    usuario.carrito.forEach(linea_carrito => {
        items.push({
            title: linea_carrito.libro.titulo,
            quantity: (+linea_carrito.cantidad),
            currency_id: "ARS",
            unit_price: (+linea_carrito.libro.precio)
        });
    });
    return items;
}
function generateLinkMercadoPago(items) {
    return __awaiter(this, void 0, void 0, function* () {
        mercadopago.configure({ access_token: config_1.MERCADO_PAGO_TOKEN });
        const preference = {
            items: items,
            back_urls: {
                success: 'https://music.youtube.com/',
                failure: 'https://www.mercadopago.com.ar/developers/es/reference',
                pending: 'https://www.google.com/',
            },
            auto_return: 'approved'
        };
        return mercadopago.preferences
            .create(preference)
            .then(function (response) {
            return response;
        })
            .catch(function (error) {
            console.log(error);
            return null;
        });
    });
}
// async function estadoPago()
// {
//     // main.get("https://music.youtube.com/", async (req, res) => {
//     //     const payment = await mercadopago.payment.findById(req.query.payment_id);
//     //     const merchantOrder = await mercadopago.merchant_orders.findById(payment.body.order.id);
//     //     const preferenceId = merchantOrder.body.preference_id;
//     //     const status = payment.body.status;
//     //     console.log(`Estado del pago ${status}`)
//     // });
// }
function realizarCompra(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const usuario = yield (0, getCarritoUsuario_1.getCarritoUsuario)(id);
        const items = getItems(usuario[0]);
        const res = yield generateLinkMercadoPago(items);
        return res;
    });
}
exports.realizarCompra = realizarCompra;

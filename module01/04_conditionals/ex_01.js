/*Na compra de um determinado produto, o cliente consegue um desconto de 10% caso pague à
vista. Caso queira parcelar, a loja parcela sem juros, mas sem desconto.
Imprima na tela uma mensagem explicando para o cliente como ele tem que pagar, incluindo
o valor da parcela.*/

let price_product = 100.0;
let number_parcels = 6;
let parcel = (price_product / number_parcels).toFixed(2);

if (number_parcels === 1) {
    let price_discount = price_product * 0.9;
    console.log(
        `Total price: R$ ${price_discount}\nParcels: ${number_parcels}x`
    );
} else {
    console.log(
        `Total price: R$ ${price_product}\nParcels: ${number_parcels}x of R$ ${parcel} (free-interest)`
    );
}

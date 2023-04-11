/*Na compra de um determinado produto, o cliente consegue um desconto de 10% caso pague à
vista. Caso queira parcelar, a loja parcela em até 6x sem juros, mas sem desconto. Entre
7x e 12x será aplicada uma taxa de juros de 1% ao mês. Ou seja, antes de calcular o valor 
da parcela é preciso calcular o novo montante a pagar.
Imprima na tela uma mensagem explicando para o cliente como ele tem que pagar, incluindo
o valor da parcela.*/

let price_product = 100.0;
let number_parcels = 1;

if (number_parcels === 1) {
    let price_discount = price_product * 0.9;
    console.log(
        `Total price: R$ ${price_discount}\nParcels: ${number_parcels}x`
    );
} else if (number_parcels >= 2 && number_parcels <= 6) {
    let parcel = (price_product / number_parcels).toFixed(2);
    console.log(
        `Total price: R$ ${price_product}\nParcels: ${number_parcels}x of R$ ${parcel} (free-interest)`
    );
} else {
    let final_price = (price_product * (1 + 1 / 100) ** number_parcels).toFixed(
        2
    );
    let parcel = (final_price / number_parcels).toFixed(2);
    console.log(
        `Total price: R$ ${final_price}\nParcels: ${number_parcels}x of R$ ${parcel} (with interest)`
    );
}

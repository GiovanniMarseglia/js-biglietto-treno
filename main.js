let age = prompt( "inserire la propria età" );
let km = prompt( "inserire il numero di km da percorrere" );
let total_price;
const price = 0.21;
let first_price = km * price;
const under = 20;
const over = 40;


if (age < 18){
    total_price = first_price - ((first_price / 100) * under);
    document.writeln(`<p>Il prezzo del biglietto è di:${first_price.toFixed(2)}€, in quanto minorenne per lei è riserveto uno sconto del 20%. </P>`); 
    document.writeln(`<p>Il prezzo finale dovuto è di:${total_price.toFixed(2)}€ </P>`);
}
else if (age > 65){
    total_price = first_price - ((first_price / 100) * over);
    document.writeln(`<p>Il prezzo del biglietto è di:${first_price.toFixed(2)}€, in quanto maggiorenne per lei è riserveto uno sconto del 40%. </P>`); 
    document.writeln(`<p>Il prezzo finale dovuto è di:${total_price.toFixed(2)}€ </P>`);
}
else{
    document.writeln(`<p>Il prezzo totale del biglietto è di: ${first_price.toFixed(2)}€ </P>`);
}
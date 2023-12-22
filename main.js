let loginForm = document.getElementById("inv");


loginForm.addEventListener("click", function() {

let age = document.getElementById("age1").value;
let km = document.getElementById("km2").value;
let total_price;
const price = 0.21;
let first_price = km * price;
const under = 20;
const over = 40;

if(age == "" || km == ""){
    document.writeln("I campi non possono rimanere vuoti");
}
else{
if (age < 18){
    total_price = first_price - ((first_price / 100) * under);
    document.getElementById("prz").innerHTML = (`<p>Il prezzo del biglietto è di: ${first_price.toFixed(2)}€, in quanto minorenne per lei è riserveto uno sconto del 20%. </P>`); 
    document.getElementById("sco").innerHTML = (`<p>Il prezzo finale con lo sconto applicato è di: ${total_price.toFixed(2)}€ </P>`);

    
}
else if (age > 65){
    total_price = first_price - ((first_price / 100) * over);
    document.getElementById("prz").innerHTML = (`<p>Il prezzo del biglietto è di:${first_price.toFixed(2)}€, in quanto over 65 per lei è riserveto uno sconto del 40%. </P>`); 
    document.getElementById("sco").innerHTML = (`<p>Il prezzo finale con lo sconto applicato è di: ${total_price.toFixed(2)}€ </P>`);
}
else{
    document.getElementById("prz").innerHTML = (`<p>Il prezzo totale del biglietto è di: ${first_price.toFixed(2)}€ </P>`);
}
}
});
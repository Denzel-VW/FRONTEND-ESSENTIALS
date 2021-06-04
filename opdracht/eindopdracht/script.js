let persoon = {
    voornaam :  prompt("Wat is je naam?"),
    achternaam : prompt("Wat is je achternaam?"),
    leeftijd : prompt("Wat is je leeftijd?"),
    email: prompt("Wat is je email?"),
    woonplaats: prompt("Wat is je woonplaats?")
};


if(persoon.leeftijd == 16){
    document.querySelector('body').style.background = 'orange';
}

else if(persoon.leeftijd == 17){
    document.querySelector('body').style.background = 'blue';
}

else if(persoon.leeftijd == 18){
    document.querySelector('body').style.background = 'gold';
}

else if(persoon.leeftijd == 19){
    document.querySelector('body').style.background = 'green';
}

else {
    document.querySelector('body').style.background = 'yellow';
}




console.log(persoon);
document.getElementById("naam").innerHTML = persoon.voornaam;
document.getElementById("achternaam").innerHTML = persoon.achternaam;
document.getElementById("leeftijd").innerHTML = persoon.leeftijd;
document.getElementById("email").innerHTML = persoon.email;
document.getElementById("woonplaats").innerHTML = persoon.woonplaats;


// let persoon = {
//     voornaam :  prompt("Wat is je naam?"),
//     achternaam : prompt("Wat is je achternaam?"),
//     leeftijd : prompt("Wat is je leeftijd?"),
//     email: prompt("Wat is je email?"),
//     woonplaats: prompt("Wat is je woonplaats?")
// };
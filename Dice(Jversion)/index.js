


var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[3];

image2.setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 win!"
    document.getElementById("gon").src = "image2/Gon_2.png"

}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 win!";
    document.getElementById("killua").src= "image2/Killua_2.png"
}else{
    document.querySelector("h1").innerHTML = "😁 DRAW 😁"
}
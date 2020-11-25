/**
 * @author Cioromela Valentin Stefan
 */

var dice1, dice2;
var player1 = 0, player2 = 0;

var dices = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

function roll() {


    dice1 = Math.floor(Math.random() * 6);
    dice2 = Math.floor(Math.random() * 6);

    document.querySelector(".img1").setAttribute("src", dices[dice1]);
    document.querySelector(".img2").setAttribute("src", dices[dice2]);

    if (dice1 > dice2) {
        document.getElementById("title").innerHTML = "🚩 Player 1 Wins!";
        player1 += 1;
        document.getElementById("player1").innerHTML = player1;
    } else if (dice2 > dice1) {
        document.getElementById("title").innerHTML = "Player 2 Wins! 🚩";
        player2 += 1;
        document.getElementById("player2").innerHTML = player2;
    } else {
        document.getElementById("title").innerHTML = "Draw!";
    }

}


const rollBtn = document.getElementById ("rollBtn");
const diceLabel = document.getElementById("diceLabel");

const diceFaces = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];

rollBtn.onclick = function(){
    const randomNumber = Math.floor(Math.random()*6 );
    diceLabel.textContent = diceFaces[randomNumber];
}
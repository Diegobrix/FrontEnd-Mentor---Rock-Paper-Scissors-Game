const scoreDisplay = document.querySelector(".score");
const choosed = document.querySelectorAll(".jokenpo");
const jokenpo = ["rock", "paper", "scissors"];
let pcChoose;
let playerChoose;

let score = 0;

window.addEventListener("load", () => {
    scoreDisplay.innerText = (score);
});

choosed.forEach((element) => {
    element.addEventListener("click", iChooseYou);
});

function iChooseYou() 
{
    let optionChoosed = this.getAttribute("data-order");
    playerChoose = optionChoosed;

    let randomOption = (Math.floor(Math.random() * 101));
    pcChoose =  randomOption < 33 ? 0 
    : randomOption > 66 ? 2 
    : 1;

    game(playerChoose, pcChoose);
}

function game(player, pc) 
{
    let winner = false;

    switch(player)
    {
        case "0":
            if(pc == 2)
            {
                winner = true;
            }
            break;
        case "1":
            if(pc == 0)
            {
                winner = true;
            }
            break;
        case "2":
            if(pc == 1) 
            {
                winner = true;
            }
            break;
    }

    if(winner)
    {
        score++;
        scoreDisplay.innerText = (score);
    }

    console.log("Player: " + jokenpo[player] + " Pc: " + jokenpo[pc]);

}
const scoreDisplay = document.querySelector(".score");
const container = document.querySelector(".buttons-wrapper");
const choosed = document.querySelectorAll(".jokenpo");
const choosedBackground = document.querySelector(".choosed-jokenpo");
const playerDisplay = document.querySelector("#player");
const pcDisplay = document.querySelector("#house");
const iconChoosed = document.querySelector("#player i");
const iconChoosedPc = document.querySelector("#house i");

const resultContainer = document.querySelector(".game-result-wrapper");
const resultTitle = document.querySelector(".result-title");
const btnPlayAgain = document.querySelector(".btn-play-again");

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

btnPlayAgain.addEventListener("click", () => {
    playAgain();
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
    container.setAttribute("selected", "true");
    choosedBackground.setAttribute("visible", "true");
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
        resultTitle.innerText = "you win";
    }
    playerDisplay.style = ("--player: var(--" + jokenpo[player] + ");--player-50:var(--" + jokenpo[player] + "-50);");
    pcDisplay.style = ("--house: var(--" + jokenpo[pc] + ");--house-50:var(--" + jokenpo[pc] + "-50);");
    console.log("Player: " + jokenpo[player] + " Pc: " + jokenpo[pc]);
    iconChoosed.style = ("--img-link: url(../images/icon-"+ jokenpo[player] +".svg);");
    iconChoosedPc.style = ("--img-link: url(../images/icon-"+ jokenpo[pc] +".svg);");

    if(!winner)
    {
        if(pc == player)
        {
            resultTitle.innerText = "draw";
        }
        else 
        {
            resultTitle.innerText = "you lose";
        }
    }

    resultContainer.setAttribute("game-over", "true");
}

function playAgain() 
{
    container.setAttribute("selected", "false");
    choosedBackground.setAttribute("visible", "false");
    resultContainer.setAttribute("game-over", "false");

    playerDisplay.style = ("--player: ''; --player-50: '';");
    pcDisplay.style = ("--house: ''; --house-50: '';");
    iconChoosed.style = ("--img-link: '';");
    iconChoosedPc.style = ("--img-link: '';");

    player = "";
    pc = "";
}
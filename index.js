let playerscore = 0;
let computerscore = 0;
let roundsplayed=0


//returning a random option 
function getComputerChoice(){
    array  = ["rock", "paper", "scissors"]
    choice = array[Math.floor((Math.random()*array.length))]
    console.log("Computer chose: " + choice)
    return choice;

}

function getPlayerChoice (b){
    console.log("You chose: " +b)

    let playerSelection = b
    let computerSelection = getComputerChoice()
    console.log(start(playerSelection, computerSelection))
    roundsplayed++

    if (roundsplayed ==5){
        console.log("Game is over! You score: " +playerscore + ". Computer score: " +computerscore+ ".")
        resetgame();
    }

}


let button1 = document.querySelector("#rock")
button1.addEventListener("click", function(){getPlayerChoice("rock")});

let button2 = document.querySelector("#paper")
button2.addEventListener("click", function(){getPlayerChoice("paper")});

let button3 = document.querySelector("#scissors")
button3.addEventListener("click", function(){getPlayerChoice("scissors")});




function start(playerSelection, computerSelection){
        if (computerSelection == playerSelection){
            return "Its a tie!"
        } else if ((playerSelection == "rock" && computerSelection == "paper" ) || (computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "paper")){
            computerscore++
            return "You Lose"
            
        } else if ((computerSelection == "paper" && playerSelection == "scissors") || (computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "scissors" && playerSelection == "rock")){
            playerscore++
            return "You win"
        } else {
            return ("Wrong option")
        }
} 


function resetgame(){
    playerscore = 0;
    computerscore = 0;
    roundsplayed=0;
    console.log ("game reset")
}
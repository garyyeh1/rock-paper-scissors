//returning a random option 
function getComputerChoice(){
    array  = ["rock", "paper", "scissors"]
    choice = array[Math.floor((Math.random()*array.length))]
    console.log("Computer chose: " + choice)
    return choice;

}

function getPlayerChoice (b){
    let playerchoice = b
    console.log("You chose: " +playerchoice)

    let playerSelection = b
    let computerSelection = getComputerChoice()
    console.log(start(playerSelection, computerSelection))

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
        return "You Lose"
    } else if ((computerSelection == "paper" && playerSelection == "scissors") || (computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "scissors" && playerSelection == "rock")){
        return "You win"
    } else {
        return ("Wrong option")
    }
}       





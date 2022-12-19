import './style.css'

let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){
  const choice = ['Rock', 'Paper', 'Scrissors'];
  const num = Math.floor(Math.random() * choice.length);
  return choice[num].toUpperCase();
}

function checkWinner(playerScore, computerScore){
  if(playerScore === 5){
    const h2 = document.createElement('h2')
    h2.classList.add('player-won');
    h2.innerText = `You won ${playerScore} to ${computerScore}. Great Job!`;
    outcomeHTML.appendChild(h2);
  } else if (computerScore === 5) {
    const h2 = document.createElement('h2')
    h2.innerText = `You lost ${playerScore} to ${computerScore}. Good luck next time!`;
    outcomeHTML.appendChild(h2);
  }
}


const rockHTML = document.querySelector('#rock');
rockHTML.addEventListener("click", function(){
  const playerSelection = 'ROCK';
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  liveScore(playerScore, computerScore);
  checkWinner(playerScore, computerScore)
  
  
});

const paperHTML = document.querySelector('#paper');
paperHTML.addEventListener("click", function() {
  const playerSelection = 'PAPER';
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  liveScore(playerScore, computerScore);
  checkWinner(playerScore, computerScore);
  
});

const scrissorsHTML = document.querySelector('#scrissors');
scrissorsHTML.addEventListener("click", function() {
  const playerSelection = 'SCRISSORS';
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  liveScore(playerScore, computerScore);
  checkWinner(playerScore, computerScore);
});

const outcomeHTML = document.querySelector('#outcome');
const playerSpan = document.querySelector('#playScore');
const compSpan = document.querySelector('#compScore');

function liveScore(playerScore, computerScore){
  // const h1 = document.createElement('h1')
  playerSpan.innerText = `Player score: ${playerScore}`;  
  compSpan.innerText = `Computer Score: ${computerScore}`;
 }



function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === 'ROCK' && computerSelection === 'SCRISSORS'){
    playerScore++;
    const para = document.createElement('p');
    para.innerText = "You Won! Rock beats Scrissors";
    outcomeHTML.appendChild(para);
    
  } else if (playerSelection === 'SCRISSORS' && computerSelection === 'PAPER'){
    playerScore++;
    const para = document.createElement('p');
    para.innerText = "You Won! Scrissors beats Paper";
    outcomeHTML.appendChild(para);

  } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
    playerScore++;
    const para = document.createElement('p');
    para.innerText ="You Won! Paper beats Rock";
    outcomeHTML.appendChild(para);

  } else if (playerSelection === 'SCRISSORS' && computerSelection === 'ROCK'){
    computerScore++;
    const para = document.createElement('p');
    para.innerText = "You Lost! Rock beats Scrissors";
    outcomeHTML.appendChild(para);

  } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER'){
    computerScore++;
    const para = document.createElement('p');
    para.innerText = "You Lost! Paper beats Rock";
    outcomeHTML.appendChild(para);

  } else if (playerSelection === 'PAPER' && computerSelection === 'SCRISSORS'){
    computerScore++;
    const para = document.createElement('p');
    para.innerText = "You Lost! Scrissors beats Paper";
    outcomeHTML.appendChild(para);

  } else if ( playerSelection === computerSelection){
    const para = document.createElement('p');
    para.innerText = "It's a tie";
    outcomeHTML.appendChild(para);
  }
  
  
};




// const game = () =>  {

//   for (let i = 0; i < 5; i++){
//     const playerSelection  = 'rock'; 
//     const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
//   }

//   if (playerScore > computerScore){
//     return 'You beat computer!'
//   } else if (playerScore < computerScore){
//     return 'The computer beat you! Sadge'
//   } else {
//     return 'Its a tie';
//   }
// }

// game()

// Old code before i needed to add buttons

// const r = 'Rock';
// const s = 'Scissors';
// const p = 'Paper';


// function getPlayerChoice(){
//   const choice = 'rock';
//   return choice.toUpperCase();
// }
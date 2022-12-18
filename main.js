// import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

let computerScore = 0;
let playerScore = 0;

const r = 'Rock';
const s = 'Scissors';
const p = 'Paper';


function getComputerChoice(){
  const choice = ['Rock', 'Paper', 'Scissors'];
  const num = Math.floor(Math.random() * choice.length);
  return choice[num].toUpperCase();
}

function getPlayerChoice(){
  const choice = prompt("Please enter your choice:");
  return choice.toUpperCase();
}





function playRound(playerSelection, computerSelection) {

  let Winner;
  
  if (playerSelection === r.toUpperCase() && computerSelection === s.toUpperCase()){
    playerScore++;
    Winner = "You Won! Rock beats Scissors";
  } else if (playerSelection === s.toUpperCase() && computerSelection === p.toUpperCase()){
    playerScore++;
    Winner = "You Won! Scissors beats Paper";
  } else if (playerSelection === p.toUpperCase() && computerSelection === r.toUpperCase()){
    playerScore++;
    Winner = "You Won! Paper beats Rock";
  } else if (playerSelection === s.toUpperCase() && computerSelection === r.toUpperCase()){
    computerScore++;
    Winner = "You Lost! Rock beats Scissors";
  } else if (playerSelection === r.toUpperCase() && computerSelection === p.toUpperCase()){
    computerScore++;
    Winner = "You Lost! Paper beats Rock";
  } else if (playerSelection === p.toUpperCase() && computerSelection === s.toUpperCase()){
    computerScore++;
    Winner = "You Lost! Scissors beats Paper";
  } else if ( playerSelection === computerSelection){
    Winner = "It's a tie";
  }
  
  return Winner;
}





const game = () =>  {

  for (let i = 0; i < 5; i++){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore > computerScore){
    return 'You beat computer!'
  } else if (playerScore < computerScore){
    return 'The computer beat you! Sadge'
  } else {
    return 'Its a tie';
  }
}

game()
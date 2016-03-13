////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////


function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
   return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
     var result;
    if (move === 'rock' || move === 'paper' || move === 'scissors')
    {
        result = move;
    }
    else {
        alert('Please enter only Rock, Paper or Scissors');
    result = getInput();}
              return result;

}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var result;
    if (move === 'rock' || move === 'paper' || move === 'scissors')
    {
        result = move;
    }
    else if (move === 'null') {
    getInput();

    }
                      return result;

}

function getWinner(playerMove,computerMove) {
     // This function should either give us back 'player', 'computer', or 'tie'.
     // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
     // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.
 
      var winner ;
      
  if (playerMove === 'rock')
    {
      if (computerMove ===  'rock')
      {
      winner = 'tie';
      }
      else if (computerMove ===  'scissors')
      {
      winner = 'player';
      }
      else if (computerMove ===  'paper')
      {
      winner = 'computer';
      }
        
    }
    else if (playerMove === 'scissors')
    {
      if (computerMove ===  'rock')
      {
      winner = 'computer';
      }
      else if (computerMove ===  'scissors')
      {
      winner = 'tie';
      }
      else if (computerMove ===  'paper')
      {
      winner = 'player';
      }
    }
        
        else if (playerMove === 'paper')
    {
        
      if (computerMove ===  'rock')
      {
      winner = 'player';
      }
      else if (computerMove ===  'scissors')
      {
      winner = 'computer';
      }
      else if (computerMove ===  'paper')
      {
      winner = 'tie';
      }

    }
    
 // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
     // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
     /* YOUR CODE HERE */
     return winner;
  
}

function playToFive() {
    console.log("\nLet's play Rock, Paper, Scissors \n");
    var playerWins = 0;
    var computerWins = 0;
    
do{
var pMove = getInput();
var cMove = randomPlay();
var pMove1 = getPlayerMove(pMove);
    var result = getWinner(pMove1,getComputerMove(cMove));
   if(result === 'player')
    playerWins += 1;
    else if(result === 'computer')
    computerWins +=1;
    else
    playerWins += 0;
    
    alert("You chose - " + pMove1 + " \nComputer chose - " + cMove + "\nWinner is " +result +"\n Current Score "+ playerWins + "-" + computerWins);
    console.log("You chose - " + pMove1 + " , Computer chose - " + cMove);
    console.log("Winner is " +result + "\n" );
} while (( playerWins <5) && (computerWins <5))
   // console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
     
     // After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
     // For example,
     //  console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
     //  console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
   // /* YOUR CODE HERE 
      return [playerWins, computerWins];
  }
  
  playToFive();
  
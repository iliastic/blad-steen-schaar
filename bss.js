// All of our code and additional function i've put in here
const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startgame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector ('.intro');
        const match= document.querySelector ('.match');
            //() =>{ "shorter for function"
        playBtn.addEventListener('click',() =>{
                introScreen.classList.add("fadeOUt");
                match.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch= () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector ('.player-hand');
        const computerHand = document.querySelector('computer-hand');
        //computer Options
        const computerOptions =['rock', 'paper','scissors'];

        options.forEach(option=>{
            // with this part I had to use a normal funtion otherwise it would not bounce to option 
            option.addEventListener('click',function(){
                //computer choice
                const computerNumber= Math.floor(Math.random() *3);
                const computerChoice = computerOptions[computerNumber];
                //here is where we call compare hands
                compareHands(this.textContent, computerChoice);
                //update images
                playerHand.src ='./assets/${this.textContent}.png';
                computerHand.src = './assets/${computerChoice}.png'; 
            });
        });
    };

    const updateScore = () =>{
        const playerScore = document.querySelector ('.player-score p');
        const computerScore = document.querySelector ('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

const compareHands =(playerChoice, computerChoice) => {
    //update text
    const winner = document.querySelector('.winner');
    //checking for a tie 
    if(playerChoice === computerChoice){
        winner.textContent = 'It is a tie';
        return;

    }
    //check for rock
    if(playerChoice === 'rock'){
        if(computerChoice === 'scissors'){
            winner.textContent = 'Player wins';
            pScore++;
            return;
        } else{
            winner.textContent = 'Computer wins';
            cScore++;
            return;
        }
    }
    // Check for paper
    if(playerChoice === 'paper'){
        if(computerChoice === 'scissors'){
            winner.textContent = 'Computer wins';
            cScore++;
            updateScore();
            return;
        } else{
            winner.textContent = 'Player wins';
            pScore++;
            updateScore();
            return;
        }
    }
    // Check for scissors
    if(playerChoice === 'scissors'){
        if(computerChoice === 'rock'){
            winner.textContent = 'Computer wins';
            cScore++;
            updateScore();
            return;
        } else{
            winner.textContent = 'Player wins';
            pScore++;
            updateScore();
            return;
        }
    }
}

    //call all the inner function
    startgame();
    playMatch();
};

//start game function
game();
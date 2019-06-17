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
        const playeHand = document.querySelector ('.player-hand');
        const computerhand = document.querySelector('computer-hand');
        //computer Options
        const computerOptions =['rock', 'paper','scissors'];

    };

    //call all the inner function
    startgame();
    updateScore();
};

//start game function
game();
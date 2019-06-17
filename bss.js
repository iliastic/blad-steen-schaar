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
        const computerhand = document.querySelector('computer-hand');
        //computer Options
        const computerOptions =['rock', 'paper','scissors'];

        options.forEach(option=>{
            // with this part I had to use a normal funtion otherwise it would not bounce to option 
            option.addEventListener('click',function(){
                //computer choice
                const computerNumber= Math.floor(Math.random() *3);
                const computerChoise = computerOptions[computerNumber];
            });
        });
    };

        const computerNumber= Math.floor(Math.random() *3);

    };

    //call all the inner function
    startgame();
    playMatch();
};

//start game function
game();
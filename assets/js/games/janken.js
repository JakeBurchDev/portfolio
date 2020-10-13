class Janken {
    constructor() {
        this.playerScore = 0;
        this.computerScore = 0;
    }

    start() {
        views.mystery.printViewTagArray(4).then(() => {
            this.setupGameClicks();
        });
    }

    setupGameClicks() {
        document.querySelectorAll('.janken-option').forEach(option => {
            option.addEventListener('click', event => {
                let selection;
                
                if(checkForClass('rock')) {
                    selection = 'rock';
                } else if (checkForClass('paper')) {
                    selection = 'paper';
                } else if(checkForClass('scissors')) {
                    selection = 'scissors';
                }
    
                this.playRound(selection);
            
                function checkForClass(classToFind) {
                    return event.target.classList.contains(classToFind);
                }
            });
        });
    }

    playRound(playerPlay) {
        View.clearScreen();

        const computerPlay = this.getComputerPlay();
        const tagArray = [
            new Tag('p', `I played ${computerPlay}!`),
            new Tag('p', `You played ${playerPlay}!`),
            new Tag('p', `-----`)
        ];

        if(playerPlay !== computerPlay) {
            const playerWins = this.applyRoundPoints(playerPlay, computerPlay);

            tagArray.push(new Tag('p', `${playerWins ? 'You' : 'I'} win that round!`));
        } else {
            tagArray.push(new Tag('p', 'Aw, we tied!'));
        }

        View.printTagArray(tagArray).then(() => {
            setTimeout(() => {
                View.clearScreen();
                this.checkForWin();
            }, 3000);
        });
    }

    getComputerPlay() {
        const playOptions = ['rock', 'paper', 'scissors'];
        return playOptions[Math.floor(Math.random() * 3)];
    }

    applyRoundPoints(playerPlay, computerPlay) {
        if(playerPlay === 'rock' && computerPlay === 'scissors' ||
           playerPlay === 'paper' && computerPlay === 'rock' ||
           playerPlay === 'scissors' && computerPlay === 'paper') {
            this.playerScore++;
            return true;
        } else {
            this.computerScore++;
            return false;
        }
    }

    checkForWin() {
        if(this.playerScore === 2) {
            GameManager.gameOver(true);
        } else if(this.computerScore === 2) {
            GameManager.gameOver(false);
        } else {
            this.start();
        }
    }
}
class GameManager {
    constructor() {
        this.currentGame = {};
    }

    init(game) {
        document.querySelector('.screen-content').innerHTML = '';

        switch(game) {
            case 'game-tic-tac-toe':
                this.currentGame = new TicTacToe();
                break;
            case 'game-janken':
                this.currentGame = new Janken();
                break;
            case 'game-war':
                this.currentGame = new War();
                break;
        }

        this.currentGame.start();
    }

    gameOver(playerWins) {
        views.mystery.printTagArray(playerWins ? 1 : 2);
        setTimeout(() => {
            document.querySelector('.screen-content').innerHTML = '';
            views.mystery.printTagArray(0);
        }, 3000);
    }
}
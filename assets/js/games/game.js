class Game {
    constructor() {
        this.currentGame = {};
    }

    static Init(game) {
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
}
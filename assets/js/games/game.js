class Game {
    constructor() {
        this.currentGame = {};
    }

    static Init(game) {
        document.querySelector('.screen-content').innerHTML = '';

        console.log(game);

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

        console.log(this.currentGame);
        this.currentGame.start();
    }
}
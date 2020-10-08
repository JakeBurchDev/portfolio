class GameManager {
    static currentGame = {}

    static init(game) {
        document.querySelector('.screen-content').innerHTML = '';

        switch(game) {
            case 'game-tic-tac-toe':
                GameManager.currentGame = new TicTacToe();
                break;
            case 'game-janken':
                GameManager.currentGame = new Janken();
                break;
            case 'game-war':
                GameManager.currentGame = new War();
                break;
        }

        GameManager.currentGame.start();
    }

    static gameOver(playerWins) {
        views.mystery.printTagArray(playerWins ? 1 : 2);
        setTimeout(() => {
            document.querySelector('.screen-content').innerHTML = '';
            views.mystery.printTagArray(0);
        }, 3000);
    }
}
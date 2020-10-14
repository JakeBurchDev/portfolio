class GameManager {
    static init(game) {
        View.clearScreen();

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
        views.mystery.printViewTagArray(playerWins ? 1 : 2);
        setTimeout(() => {
            View.clearScreen();
            views.mystery.printViewTagArray(0);
        }, 3000);
    }
}
class TicTacToe {
    constructor() {
        this.board = [
            ['_', '_', '_'],
            ['_', '_', '_'],
            ['_', '_', '_']
        ]
    }

    start() {
        views.mystery.printTagArray(1).then(() => {
            this.setBoard();
            this.setupCellClick();
        });
    }

    setBoard() {
        let gameBoard = '';

        const boardCell = (rowIndex, columnIndex) => {
            return `<span data-cords="${rowIndex},${columnIndex}">${this.board[rowIndex][columnIndex]}</span>`;
        }

        this.board.forEach((row, index) => {
            gameBoard += `<div>${boardCell(index, 0)}|${boardCell(index, 1)}|${boardCell(index, 2)}</div>`;
        });

        const boardElement = document.createElement('div');

        boardElement.classList.add('game-board');
        boardElement.innerHTML = gameBoard;
        document.querySelector('.screen-content').appendChild(boardElement);
    }

    setupCellClick() {
        document.querySelectorAll('.game-board span').forEach(cell => {
            cell.addEventListener('click', event => {
                console.log('hi')
                
                if(event.target.innerHTML === '_') {
                    event.target.innerHTML = 'x';
                }
            });
        });
    }

    checkScores() {

    }
}
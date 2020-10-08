class TicTacToe {
    constructor() {
        this.board = [
            ['_', '_', '_'],
            ['_', '_', '_'],
            ['_', '_', '_']
        ]
    }

    start() {
        views.mystery.printTagArray(3).then(() => {
            this.createBoard();
            this.setBoard();
        });
    }

    createBoard() {
        const boardElement = document.createElement('div');
        boardElement.classList.add('game-board');
        document.querySelector('.screen-content').appendChild(boardElement);
    }

    setBoard() {
        let gameBoard = '';

        const boardCell = (rowIndex, columnIndex) => {
            return `<span data-row="${rowIndex}" data-column="${columnIndex}">${this.board[rowIndex][columnIndex]}</span>`;
        }

        this.board.forEach((row, index) => {
            gameBoard += `<div>${boardCell(index, 0)}|${boardCell(index, 1)}|${boardCell(index, 2)}</div>`;
        });

        document.querySelector('.game-board').innerHTML = gameBoard;
        this.setupCellClick();
    }

    setupCellClick() {
        document.querySelectorAll('.game-board span').forEach(cell => {
            cell.addEventListener('click', event => {
                if(event.target.innerHTML === '_') {
                    const row = event.target.getAttribute('data-row');
                    const column = event.target.getAttribute('data-column');

                    this.markChoice(row, column, 'x');

                    this.checkForWin().then(result => {
                        if(result.gameOver) {
                            this.endGame(result.playerWins);
                        } else {
                            this.takeComputerTurn().then(() => {
                                this.checkForWin().then(result => {
                                    if(result.gameOver) {
                                        this.endGame(result.playerWins);
                                    }
                                }); 
                            });
                        }
                    });
                }
            });
        });
    }

    endGame(playerWins) {
        views.mystery.gameManager.gameOver(playerWins);
    }

    markChoice(row, column, mark) {
        this.board[row][column] = mark;
        this.setBoard();
    }

    checkForWin() {
        return new Promise(resolve => {
            const columnOneArray = [this.board[0][0], this.board[1][0], this.board[2][0]];
            const columnTwoArray = [this.board[0][1], this.board[1][1], this.board[2][1]];
            const columnThreeArray = [this.board[0][2], this.board[1][2], this.board[2][2]];
            const diagonalOneArray = [this.board[0][0], this.board[1][1], this.board[2][2]];
            const diagonalTwoArray = [this.board[2][0], this.board[1][1], this.board[0][2]];

            const winPatterns = [
                this.board[0],
                this.board[1],
                this.board[2],
                columnOneArray,
                columnTwoArray,
                columnThreeArray,
                diagonalOneArray,
                diagonalTwoArray
            ];

            const result = {
                gameOver: false,
                playerWins: false
            };

            winPatterns.forEach(pattern => {
                const playerWinsPattern = testCells(pattern, 'x');
                const computerWinsPattern = testCells(pattern, 'o');

                if(playerWinsPattern || computerWinsPattern) result.gameOver = true;
                if(playerWinsPattern) result.playerWins = true;
            });
            
            resolve(result);

            function testCells(cellArray, mark) {
                return cellArray.filter(cell => cell === mark).length === 3;
            }
        });
    }

    takeComputerTurn() {
        return new Promise(resolve => {
            const getSelection = () => {
                const selection = Math.floor(Math.random() * 10);
    
                if(selection < 3) {
                    trySelect(0, selection);
                } else if(selection < 6) {
                    trySelect(1, selection - 3);
                } else {
                    trySelect(2, selection - 6);
                }
            }
    
            const trySelect = (row, selection) => {
                if(this.board[row][selection] === '_') {
                    this.markChoice(row, selection, 'o');
                    resolve();
                } else {
                    getSelection();
                }
            }
    
            getSelection();
        });
    }
}
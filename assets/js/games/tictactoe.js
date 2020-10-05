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
                        if(result === 'player wins') {

                        } else if(result === 'computer wins') {

                        } else {
                            this.takeComputerTurn();
                        }
                    });
                }
            });
        });
    }

    markChoice(row, column, mark) {
        this.board[row][column] = mark;
        this.setBoard();
    }

    checkForWin() {
        return new Promise(resolve => {
            // row one
            if(testCells(this.board[0], 'x')) {
                console.log('player win')
            }

            if(testCells(this.board[0], 'o')) {
                console.log('computer win')
            }

            // row two
            if(testCells(this.board[1], 'x')) {
                console.log('player win')
            }

            if(testCells(this.board[1], 'o')) {
                console.log('computer win')
            }

            // row three
            if(testCells(this.board[2], 'x')) {
                console.log('player win')
            }

            if(testCells(this.board[2], 'o')) {
                console.log('computer win')
            }

            // column one
            const columnOneArray = [this.board[0][0], this.board[1][0], this.board[2][0]];
            if(testCells(columnOneArray, 'x')) {
                console.log('player win')
            }

            if(testCells(columnOneArray, 'o')) {
                console.log('computer win')
            }

            // column two
            const columnTwoArray = [this.board[0][1], this.board[1][1], this.board[2][1]];
            if(testCells(columnTwoArray, 'x')) {
                console.log('player win')
            }

            if(testCells(columnTwoArray, 'o')) {
                console.log('computer win')
            }

            // column three
            const columnThreeArray = [this.board[0][2], this.board[1][2], this.board[2][2]];
            if(testCells(columnThreeArray, 'x')) {
                console.log('player win')
            }

            if(testCells(columnThreeArray, 'o')) {
                console.log('computer win')
            }

            // diagonal one
            const diagonalOneArray = [this.board[0][0], this.board[1][1], this.board[2][2]];
            if(testCells(diagonalOneArray, 'x')) {
                console.log('player win')
            }

            if(testCells(diagonalOneArray, 'o')) {
                console.log('computer win')
            }

            // diagonal two
            const diagonalTwoArray = [this.board[2][0], this.board[1][1], this.board[0][2]];
            if(testCells(diagonalTwoArray, 'x')) {
                console.log('player win')
            }

            if(testCells(diagonalTwoArray, 'o')) {
                console.log('computer win')
            }


            function testCells(cellArray, mark) {
                return cellArray.filter(cell => cell === mark).length === 3;
            }

            resolve();
        });
    }

    takeComputerTurn() {
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
            console.log(row, selection);
            if(this.board[row][selection] === '_') {
                this.markChoice(row, selection, 'o');
            } else {
                getSelection();
            }
        }

        getSelection();
    }
}
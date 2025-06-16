class TicTacToe {
    constructor() {
        this.board = Array(9).fill(null);
        this.current = 'X';
        this.winner = null;
    }

    play(index) {
        if (this.board[index] || this.winner) return false;
        this.board[index] = this.current;
        if (this.checkWin()) {
            this.winner = this.current;
        } else if (this.board.every(cell => cell)) {
            this.winner = 'Draw';
        } else {
            this.current = this.current === 'X' ? 'O' : 'X';
        }
        return true;
    }

    checkWin() {
        const wins = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];
        return wins.some(line =>
            line.every(i => this.board[i] === this.current)
        );
    }

    reset() {
        this.board = Array(9).fill(null);
        this.current = 'X';
        this.winner = null;
    }
}

// --- DOM/UI Logic ---
const game = new TicTacToe();
const boardDiv = document.getElementById('game-board');
const statusDiv = document.getElementById('status');
const resetBtn = document.getElementById('reset');

function render() {
    boardDiv.innerHTML = '';
    game.board.forEach((cell, i) => {
        const cellDiv = document.createElement('div');
        cellDiv.className = 'cell';
        cellDiv.textContent = cell || '';
        cellDiv.addEventListener('click', () => {
            if (game.play(i)) {
                render();
                updateStatus();
            }
        });
        boardDiv.appendChild(cellDiv);
    });
}

function updateStatus() {
    if (game.winner) {
        statusDiv.textContent = game.winner === 'Draw' ? "It's a draw!" : `Winner: ${game.winner}`;
    } else {
        statusDiv.textContent = `Current: ${game.current}`;
    }
}

resetBtn.addEventListener('click', () => {
    game.reset();
    render();
    updateStatus();
});

render();
updateStatus();
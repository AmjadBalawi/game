const gameBoard = document.getElementById('gameBoard');
const scoreElement = document.getElementById('score');
const messageElement = document.getElementById('message');
let board;
let score;

// Initialize the board and game state
function initializeBoard() {
    board = Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => 0));
    score = 0;
    addRandomTile();
    addRandomTile();
    drawBoard();
}

// Draw the board based on current state
function drawBoard() {
    gameBoard.innerHTML = '';
    board.forEach(row => {
        row.forEach(cell => {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.innerText = cell !== 0 ? cell : '';
            tile.style.backgroundColor = getTileColor(cell);
            gameBoard.appendChild(tile);
        });
    });
    scoreElement.innerText = `Score: ${score}`;
}

// Get tile color based on value
function getTileColor(value) {
    switch (value) {
        case 0: return '#cdc1b4';
        case 2: return '#eee4da';
        case 4: return '#ede0c8';
        case 8: return '#f2b179';
        case 16: return '#f59563';
        case 32: return '#f67c5f';
        case 64: return '#f65e3b';
        case 128: return '#edcf72';
        case 256: return '#edcc61';
        case 512: return '#edc850';
        case 1024: return '#edc53f';
        case 2048: return '#edc22e';
        default: return '#3c3a32';
    }
}

// Add a random tile (either 2 or 4) to an empty spot
function addRandomTile() {
    const emptyTiles = [];
    board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            if (cell === 0) {
                emptyTiles.push({ row: rowIndex, col: colIndex });
            }
        });
    });

    if (emptyTiles.length > 0) {
        const { row, col } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
        board[row][col] = Math.random() < 0.9 ? 2 : 4;
    }
}

// Handle user input for moving tiles
function move(direction) {
    let moved = false;
    let directionVectors = {
        'ArrowUp': { row: -1, col: 0 },
        'ArrowDown': { row: 1, col: 0 },
        'ArrowLeft': { row: 0, col: -1 },
        'ArrowRight': { row: 0, col: 1 }
    };

    const vector = directionVectors[direction];
    const { row, col } = vector;

    // Game logic: Implement your move logic here (not fully implemented in this example)

    // Example: Trigger redraw of board after move
    drawBoard();
}

// Initialize the board when the page loads
initializeBoard();

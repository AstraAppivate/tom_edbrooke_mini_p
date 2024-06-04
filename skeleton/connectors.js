"use strict";
// This file contains helper code beyond the first week 'Intro to JavaScript' course content.
// You should not have to make any changes in this file to get your game working.
Object.defineProperty(exports, "__esModule", { value: true });
var board_1 = require("./board");
var academy_1 = require("./academy");
var winnerName = document.getElementById('winner-name');
var winnerDisplay = document.getElementById('winner-display');
var validCellValues = [academy_1.noughtText, academy_1.crossText, null];
var validWinValues = [academy_1.noughtText, academy_1.crossText, academy_1.nobodyText];
// Clear down the elements drawn on the board.
function clearHtmlGrid() {
    for (var rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (var columnIndex = 0; columnIndex < 3; columnIndex++) {
            document.getElementById("row-".concat(rowIndex, "-column-").concat(columnIndex)).innerHTML = '';
        }
    }
}
function populateHtmlGridWithBoardState(board) {
    console.log('populateHtmlGridWithBoardState was called with', board);
    clearHtmlGrid();
    for (var rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (var columnIndex = 0; columnIndex < 3; columnIndex++) {
            if (!board[rowIndex][columnIndex]) {
                continue;
            }
            var cellText = board[rowIndex][columnIndex] === academy_1.noughtText ? '⭕' : '❌';
            document.getElementById("row-".concat(rowIndex, "-column-").concat(columnIndex)).innerText = cellText;
        }
    }
}
function isValidRowOrColumn(arrayOfCells) {
    return Array.isArray(arrayOfCells) && arrayOfCells.length === 3;
}
function isValidColumn(columnArray) {
    return isValidRowOrColumn(columnArray)
        && columnArray.every(function (item) { return validCellValues.includes(item); });
}
// A grid position was clicked call the game's turn function, redraw and then check for a winner.
function positionClick(row, column) {
    console.log("positionClick was called with rowIndex=".concat(row, ", columnIndex=").concat(column, ","));
    //row, column, currentGameOver, currentBoard, currentPlayer
    var board = (0, academy_1.takeTurn)(row, column, (0, academy_1.getGameOver)(), (0, board_1.getBoard)(), (0, academy_1.getCurrentPlayer)());
    (0, board_1.setBoard)(board);
    (0, academy_1.setCurrentPlayer)((0, academy_1.switchPlayer)((0, academy_1.getCurrentPlayer)()));
    if (!isValidRowOrColumn(board[0]) || !board.every(isValidColumn)) {
        throw "Expecting \"getBoard\" to return a 2d array where all values are one of the strings ".concat(validCellValues, ". Actually received: ").concat(JSON.stringify(board));
    }
    populateHtmlGridWithBoardState(board);
    var winner = (0, academy_1.checkWinner)(board);
    if (winner) {
        if (typeof winner !== 'string' || !validWinValues.includes(winner)) {
            throw "Expecting \"checkWinner\" to return null or one of the strings ".concat(validWinValues, ". Actually received: ").concat(winner);
        }
        winnerName.innerText = winner;
        winnerDisplay.style.display = 'block';
    }
}
// The reset button was clicked, call the game's reset function then reset the DOM.
function resetClick(event) {
    (0, academy_1.resetGame)();
    winnerName.innerText = '';
    winnerDisplay.style.display = 'None';
    clearHtmlGrid();
}
// Bind the click events for the grid.
for (var rowIndex = 0; rowIndex < 3; rowIndex++) {
    for (var columnIndex = 0; columnIndex < 3; columnIndex++) {
        var gridPosition = document.getElementById("row-".concat(rowIndex, "-column-").concat(columnIndex));
        gridPosition.addEventListener('click', positionClick.bind(null, rowIndex, columnIndex));
    }
}
// Bind the click event for the reset button.
var resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetClick);
// initialise the state
(0, academy_1.resetGame)();

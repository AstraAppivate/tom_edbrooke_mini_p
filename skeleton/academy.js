"use strict";
// Make your changes to store and update game state in this file
Object.defineProperty(exports, "__esModule", { value: true });
exports.setGameOver = exports.getGameOver = exports.setCurrentPlayer = exports.getCurrentPlayer = exports.resetGame = exports.checkWinner = exports.switchPlayer = exports.takeTurn = exports.nobodyText = exports.crossText = exports.noughtText = void 0;
exports.noughtText = 'nought';
exports.crossText = 'cross';
exports.nobodyText = 'nobody';
// Take the row and column number between 0 and 2 (inclusive) and update the game state.
function takeTurn(rowIndex, columnIndex, currentGameOver, currentBoard, currentPlayer) {
    console.log(currentBoard[rowIndex][columnIndex]);
    currentBoard[rowIndex][columnIndex] = "cross";
    console.log(currentBoard[rowIndex][columnIndex]);
    console.log("takeTurn was called with row: ".concat(rowIndex, ", column: ").concat(columnIndex)); // keep this line 
    return [];
}
exports.takeTurn = takeTurn;
function switchPlayer(currentPlayer) {
    console.log('Switch player called. Current player is', currentPlayer);
    return undefined;
}
exports.switchPlayer = switchPlayer;
// Return either 'nought', 'cross' or 'nobody' if the game is over.
// Otherwise return null to continue playing.
function checkWinner(currentBoard) {
    console.log('checkWinner was called'); // keep this line here
    return undefined;
}
exports.checkWinner = checkWinner;
// Set the game state back to its original state to play another game.
function resetGame() {
    console.log('resetGame was called'); // keep this line here
}
exports.resetGame = resetGame;
// Return the current player
function getCurrentPlayer() {
    return undefined;
}
exports.getCurrentPlayer = getCurrentPlayer;
// Update current player
function setCurrentPlayer(newCurrentPlayer) { }
exports.setCurrentPlayer = setCurrentPlayer;
// Return the current game state
function getGameOver() {
    return false;
}
exports.getGameOver = getGameOver;
// Set the current game state
function setGameOver(newGameOver) { }
exports.setGameOver = setGameOver;

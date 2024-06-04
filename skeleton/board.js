"use strict";
// Make your changes to store and game state in this file
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBoard = exports.getBoard = void 0;
var board = [[], [], []];
// Return the current board state with either a noughtText or a crossText in
// each position. Put a null in a position that hasn't been played yet.
//retrieve the board
function getBoard() {
    console.log('getBoard was called!!!!!');
    return board;
}
exports.getBoard = getBoard;
//overwrite board with new board
function setBoard(newBoard) {
    board = newBoard;
    console.log('setBoard was called');
}
exports.setBoard = setBoard;

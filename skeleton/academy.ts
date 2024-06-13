//
// Make your changes to store and update game state in this file

import { Player, Cell, getBoard, setBoard } from './board'

export const noughtText = 'nought'
export const crossText = 'cross'
export const nobodyText = 'nobody'

let currentGameOver = false
let currentPlayer:Player = undefined


// Take the row and column number between 0 and 2 (inclusive) and update the game state.
export function takeTurn(rowIndex: number, columnIndex: number,
  currentGameOver: boolean, currentBoard: Cell[][], currentPlayer: Player): Cell[][] {
  if (currentGameOver == false){ 
    currentBoard[rowIndex][columnIndex] = currentPlayer
    }
  console.log(`takeTurn was called with row: ${rowIndex}, column: ${columnIndex}`) // keep this line 

  return currentBoard
}

// Switches and sets player to alternate between "nought" and "cross"
export function switchPlayer(currentPlayer: Player): Player {

  if (currentPlayer == 'nought' || currentPlayer == undefined) {
    currentPlayer = "cross"
  }
  else {currentPlayer = "nought"}

  console.log('Switch player called. Current player is', currentPlayer)

  return currentPlayer
}
// Return either 'nought', 'cross' or 'nobody' if the game is over.
// Otherwise return null to continue playing.
export function checkWinner(currentBoard: Cell[][]): Player {

  
  console.log('checkWinner was called') // keep this line here
  return undefined
}

// Set the game state back to its original state to play another game.


export function resetGame() {
  currentPlayer = "cross"
  console.log('resetGame was called') // keep this line here
}

// Return the current player
export function getCurrentPlayer(): Player {
  return currentPlayer
}

// Update current player
export function setCurrentPlayer(newCurrentPlayer: Player){
  currentPlayer = newCurrentPlayer
}

// Return the current game state
export function getGameOver(): boolean { 
  return false
}

// Set the current game state
export function setGameOver(newGameOver: boolean) {}

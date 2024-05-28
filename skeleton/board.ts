// Make your changes to store and game state in this file

export type Player = 'nought' | 'cross' | 'nobody' | undefined
export type Cell = number | Player | null

// Return the current board state with either a noughtText or a crossText in
// each position. Put a null in a position that hasn't been played yet.
export function getBoard(): Cell[][] {
  console.log('getBoard was called')
  return []
}

export function setBoard(newBoard: Cell[][]) {
  console.log('setBoard was called')
}

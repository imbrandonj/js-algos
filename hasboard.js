// Hash Board
// Write a program that creates a string that represents a grid
// The grid's length and width is given by the variable 'size'
// At each position of the grid there is either a space or a "#" character

let size = 12
let board = ""

for (let i = 0; i < size; i++) {
  for (let x = 0; x < size; x++) {
    if ((i + x) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board)
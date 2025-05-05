const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Function to calculate the winner
// Takes the current squares array as input
function calculateWinner(squares) {
  // Iterate through all winning lines
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; // Destructure the indices for the current line
    // Check if the squares at these indices are all the same (and not null)
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return the winner ('X' or 'O')
    }
  }
  // If no winner is found, return null
  return null;
}


export default calculateWinner
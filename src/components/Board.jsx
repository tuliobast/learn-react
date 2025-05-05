import Square from './Square';
import calculateWinner from '../assets/lines'; 

export default function Board({ xIsNext, squares, onPlay }) {

  // Handles clicks on a square
  function handleClick(i) {
    console.log('haz hecho clic')
    // If the square is already filled or there's a winner, do nothing
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    // Create a copy of the squares array
    const nextSquares = squares.slice();
    // Set the square based on whose turn it is
    nextSquares[i] = xIsNext ? 'X' : 'O';
    // Call the onPlay function passed from App to update the state
    onPlay(nextSquares);
  }

  // Render the 3x3 board
  return (
    <div className="flex flex-col items-center mb-8">
      {/* Render rows of squares */}
      <div className='flex flex-row text-9xl'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='flex flex-row text-9xl'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='flex flex-row text-9xl'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

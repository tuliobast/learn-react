import { useState } from 'react';

import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import Button from './components/Button';
import calculateWinner from './assets/lines';

export default function App() {
  // State for the game history (to allow going back in time, though not implemented here)
  // We only use the current state for now.
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0; // Determine whose turn it is based on the move number
  const currentSquares = history[currentMove]; // Get the current state of the board

  // Handles playing a move
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // Calculate the winner or the next player
  const winner = calculateWinner(currentSquares);
  let status;
  if (winner) {
    status = "Ganador: " + winner; // Display "Winner" in Spanish
  } else if (currentMove === 9) { // Check for a draw
     status = "¡Empate!"; // Display "Draw" in Spanish
  } else {
    status = "Siguiente jugador: " + (xIsNext ? "X" : "O"); // Display "Next player" in Spanish
  }

  // Function to reset the game
  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }


  return (
    // Main container for the game
    // Assumes Tailwind classes are available via your separate index.css
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Render the Header component, passing the status */}
      <Header status={status} />
      {/* Render the Board component */}
      <Board xIsNext={xIsNext} 
        squares={currentSquares} 
        onPlay={handlePlay} 
      />
       {/* Render the Reset button */}
      <Button 
        text={"Reiniciar Juego"} 
        onButtonClick={() => resetGame()} 
      />
    </div>
  );
}
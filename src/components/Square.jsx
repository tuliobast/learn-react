
export default function Square({ value, onSquareClick }) { // Corrected component name and prop name
  return (
    // Button representing a square
    <button
      className='border-2 border-slate-500 dark:border-slate-400 size-32 m-1 text-7xl font-bold flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition duration-150 ease-in-out hover:bg-slate-100 dark:hover:bg-slate-700'
      onClick={onSquareClick} // Use the passed click handler
    >
      {/* Display X or O */}
      {value}
    </button>
  );
}



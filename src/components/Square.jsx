
export default function Square({value, onSquareClick}) {
  return (
    <button className="border-2 border-slate-500 size-36 text-9xl" onClick={onSquareClick}>
      {value}
    </button>
  );
}

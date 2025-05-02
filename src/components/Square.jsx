
export default function Square({value, onSquareClick}) {
  return (
    <button className="border-2 border-slate-500 size-7" onClick={onSquareClick}>
      {value}
    </button>
  );
}

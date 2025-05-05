export default function Header({ status }) {
  return (
    <div className="mb-8 pb-4 text-6xl font-semibold text-center">
      {/* Display the game status */}
      {status}
    </div>
  );
}
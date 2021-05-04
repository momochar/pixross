import "./App.css";
import Puzzle from "./components/Puzzle";

function App() {
  const puzzleSize = 3;
  const puzzle = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ];
  return (
    <div className="App">
      <Puzzle size={puzzleSize} puzzle={puzzle}></Puzzle>
    </div>
  );
}

export default App;

import "./App.css";
import Puzzle from "./components/Puzzle";
import PuzzleChoice from "./components/PuzzleChoice";

function App() {
  const puzzleSize = 3;
  const puzzle = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ];

  const puzzle1 = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ];
  const puzzle2 = [
    [1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 1, 0, 0],
  ];
  const puzzle3 = [
    [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
    [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
    [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
  ];

  const puzzles = [
    puzzle1, puzzle2, puzzle3
  ]
  return (
    <div className="App">
      <PuzzleChoice></PuzzleChoice>
      <Puzzle size={puzzleSize} puzzle={puzzle}></Puzzle>
    </div>
  );
}

export default App;

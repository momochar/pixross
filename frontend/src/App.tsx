import { useState } from "react";
import "./App.css";
import Puzzle from "./components/Puzzle";
import PuzzleChoice from "./components/PuzzleChoice";

type PuzzleId = number;

function App() {
  const [choicedPuzzleId, setChoisedPuzzuleId] = useState(0 as PuzzleId);

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

  // FIXME: キーの型を PuzzleId にしたい
  const puzzles: { [key: number]: number[][] } = {
    0: puzzle1,
    1: puzzle2,
    2: puzzle3,
  };
  const choicedPuzzle = puzzles[choicedPuzzleId];
  return (
    <div className="App">
      <PuzzleChoice
        choicedPuzzleId={choicedPuzzleId}
        onChangeChoice={() => {}}
      ></PuzzleChoice>
      <Puzzle size={choicedPuzzle.length} puzzle={choicedPuzzle}></Puzzle>
    </div>
  );
}

export default App;

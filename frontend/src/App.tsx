import { useState } from "react";
import "./App.css";
import Puzzle from "./components/Puzzle";
import PuzzleChoice from "./components/PuzzleChoice";
import { PuzzleId } from "./types";

function App() {
  const [choicedPuzzleId, setChoisedPuzzuleId] = useState(0 as PuzzleId);

  const puzzle0 = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ];
  const puzzle1 = [
    [1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 1, 0, 0],
  ];
  const puzzle2 = [
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
    0: puzzle0,
    1: puzzle1,
    2: puzzle2,
  };
  const puzzleIds: PuzzleId[] = Object.keys(puzzles).map((key) => Number(key));
  const choicedPuzzle = puzzles[choicedPuzzleId];

  const onChangeChoice = (puzzleId: PuzzleId) => {
    setChoisedPuzzuleId(puzzleId);
  };

  return (
    <div className="App">
      <PuzzleChoice
        puzzleIds={puzzleIds}
        choicedPuzzleId={choicedPuzzleId}
        onChangeChoice={onChangeChoice}
      ></PuzzleChoice>
      <Puzzle puzzle={choicedPuzzle}></Puzzle>
    </div>
  );
}

export default App;

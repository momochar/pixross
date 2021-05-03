import "./App.css";
import Puzzle from "./components/Puzzle";


function App() {
  const puzzleSize = 3;
  return (
    <div className="App">
      <Puzzle size={puzzleSize}></Puzzle>
    </div>
  );
}

export default App;

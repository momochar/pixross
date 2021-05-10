import { render } from "@testing-library/react";
import PuzzleChoice from "./";

test("renders PuzzleChoice", () => {
  render(
    <PuzzleChoice
      puzzleIds={[0, 1, 2]}
      choicedPuzzleId={0}
      onChangeChoice={() => {}}
    />
  );
});

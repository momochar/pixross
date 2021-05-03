import { render } from "@testing-library/react";
import Puzzle, { createGuide } from "./";

test("renders Puzzle", () => {
  const puzzle = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ];
  render(<Puzzle puzzle={puzzle} size={10} />);
});

test("createGuide", () => {
  const puzzle = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ];
  const result = createGuide(puzzle);
  const expected = [
    []
  ]
  expect(result).toBe(expected);
});

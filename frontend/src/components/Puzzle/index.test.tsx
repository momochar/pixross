import { render } from "@testing-library/react";
import Puzzle, { createGuide, updateStatuses } from "./";

test("renders Puzzle", () => {
  const puzzle = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ];
  render(<Puzzle puzzle={puzzle} size={10} />);
});

describe("#createGuide", () => {
  test("パターン1 塗っているマスがつながっていない場合", () => {
    const puzzle = [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ];
    const result = createGuide(puzzle);
    const expected = {
      columns: [[1, 1], [1], [1, 1]],
      rows: [[1, 1], [1], [1, 1]],
    };
    expect(result).toStrictEqual(expected);
  });
  test("パターン2 塗っているマスがつながっている場合", () => {
    const puzzle = [
      [1, 1, 1],
      [0, 1, 0],
      [1, 1, 1],
    ];
    const result = createGuide(puzzle);
    const expected = {
      columns: [[1, 1], [3], [1, 1]],
      rows: [[3], [1], [3]],
    };
    expect(result).toStrictEqual(expected);
  });
});

describe("#updateStatuses", () => {
  test("1x1の更新", () => {
    const updatedStatuses = updateStatuses(0, 0, "painted", [["blank"]]);
    expect(updatedStatuses).toStrictEqual([["painted"]]);
  });

  test("3x3の更新", () => {
    const updatedStatuses = updateStatuses(1, 2, "painted", [
      ["blank", "blank", "blank"],
      ["blank", "blank", "blank"],
      ["blank", "blank", "blank"],
    ]);
    expect(updatedStatuses).toStrictEqual([
      ["blank", "blank", "blank"],
      ["blank", "blank", "painted"],
      ["blank", "blank", "blank"],
    ]);
  });
});

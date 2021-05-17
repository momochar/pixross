import { render } from "@testing-library/react";
import Puzzle, { createGuide, updateStatuses, isCorrect, apple } from "./";

test("renders Puzzle", () => {
  const puzzle = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ];
  render(<Puzzle puzzle={puzzle} />);
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

describe("#isCorrect", () => {
  describe("1×1の場合", () => {
    test("正解のときはtrueを返す", () => {
      const actual = isCorrect([["painted"]], [[1]]);
      expect(actual).toBe(true);
    });
    test("不正解のときはfalseを返す", () => {
      const actual = isCorrect([["blank"]], [[1]]);
      expect(actual).toBe(false);
    });
  });
  describe("3×3の場合", () => {
    test("正解のときはtrueを返す", () => {
      const actual = isCorrect(
        [
          ["painted", "blank", "blank"],
          ["blank", "blank", "blank"],
          ["blank", "blank", "blank"],
        ],
        [
          [1, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ]
      );
      expect(actual).toBe(true);
    });
    test("不正解のときはfalseを返す", () => {
      const actual = isCorrect(
        [
          ["painted", "blank", "blank"],
          ["blank", "blank", "blank"],
          ["blank", "blank", "blank"],
        ],
        [
          [0, 0, 0],
          [1, 0, 0],
          [0, 0, 0],
        ]
      );
      expect(actual).toBe(false);
    });
  });
});

describe("#apple", () => {
  test("塗っているガイドが一つある", () => {
    const actual = apple([1], ["painted", "blank", "blocked"]);
    expect(actual).toStrictEqual([{ guideNumber: 1, isAnswered: true }]);
  });
  test("塗っているガイドがない", () => {
    const actual = apple([1], ["blank", "blank", "blocked"]);
    expect(actual).toStrictEqual([{ guideNumber: 1, isAnswered: false }]);
  });
  test("ガイドと塗っているマスの数が一致しない", () => {
    const actual = apple([1], ["painted", "painted", "blocked"]);
    expect(actual).toStrictEqual([{ guideNumber: 1, isAnswered: false }]);
  });
});

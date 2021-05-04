import { render, screen, fireEvent } from "@testing-library/react";
import Pixel from "./";

test("renders Pixel", () => {
  render(<Pixel status="blank" onStatusChange={() => {}} />);
});

describe("背景色について", () => {
  test("defaultはwhite", () => {
    render(<Pixel status="blank" onStatusChange={() => {}} />);
    expect(screen.getByTestId("pixel-element")).toHaveStyle({
      background: "white",
    });
  });
  test("状態が painted なら lightblue", () => {
    render(<Pixel status="painted" onStatusChange={() => {}} />);
    expect(screen.getByTestId("pixel-element")).toHaveStyle({
      background: "lightblue",
    });
  });
  // TODO: クリックされた時の振る舞いのテスト
});

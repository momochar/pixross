import { render, screen } from "@testing-library/react";
import Pixel from "./";

test("renders Pixel", () => {
  render(<Pixel />);
});

describe("背景色について", () => {
  test("defaultはwhite", () => {
    render(<Pixel />);
    expect(screen.getByTestId("pixel-element")).toHaveStyle({
      background: "white",
    });
  });
  test("クリックされるとlightblueに変わる", () => {});
  test("lightblueのboxがクリックされるとwhiteに戻る", () => {});
});

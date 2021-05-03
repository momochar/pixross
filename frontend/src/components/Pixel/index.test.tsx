import { render, screen, fireEvent } from "@testing-library/react";
import Pixel from "./";

test("renders Pixel", () => {
  render(<Pixel />);
});

describe("背景色について", () => {
  beforeEach(() => {
    render(<Pixel />);
  });
  test("defaultはwhite", () => {
    expect(screen.getByTestId("pixel-element")).toHaveStyle({
      background: "white",
    });
  });
  test("クリックされるとlightblueに変わる", () => {
    fireEvent(
      screen.getByTestId("pixel-element"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByTestId("pixel-element")).toHaveStyle({
      background: "lightblue",
    });
  });
  test("lightblueのboxがクリックされるとwhiteに戻る", () => {
    fireEvent(
      screen.getByTestId("pixel-element"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    fireEvent(
      screen.getByTestId("pixel-element"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByTestId("pixel-element")).toHaveStyle({
      background: "white",
    });
  });
});

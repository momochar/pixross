import { render, screen, fireEvent } from "@testing-library/react";
import Pixel from "./";

test("renders Pixel", () => {
  render(<Pixel status="blank" />);
});

describe("背景色について", () => {
  beforeEach(() => {
    render(<Pixel status="blank" />);
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

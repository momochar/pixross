import { render, screen, fireEvent } from "@testing-library/react";
import Board from "./";

test("renders Board", () => {
  render(<Board size={1} statuses={[["blank"]]} onStatusChange={() => {}} />);
});

describe("pixelがクリックされたとき", () => {
  test("関数が一回呼び出される", () => {
    const myMock = jest.fn();
    render(
      <Board
        size={2}
        statuses={[
          ["blank", "blank"],
          ["blank", "blank"],
        ]}
        onStatusChange={myMock}
      />
    );
    fireEvent(
      screen.getAllByTestId("pixel-element")[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(myMock.mock.calls.length).toBe(1);
  });
});

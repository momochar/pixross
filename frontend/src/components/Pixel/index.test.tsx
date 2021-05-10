import { render, screen, fireEvent } from "@testing-library/react";
import Pixel from "./";

test("renders Pixel", () => {
  render(
    <Pixel
      rowIndex={0}
      columnIndex={0}
      status="blank"
      onStatusChange={() => {}}
    />
  );
});

describe("背景色について", () => {
  test("状態が blank なら white", () => {
    render(
      <Pixel
        rowIndex={0}
        columnIndex={0}
        status="blank"
        onStatusChange={() => {}}
      />
    );
    expect(screen.getByTestId("pixel-element")).toHaveStyle({
      background: "white",
    });
  });
  test("状態が painted なら lightblue", () => {
    render(
      <Pixel
        rowIndex={0}
        columnIndex={0}
        status="painted"
        onStatusChange={() => {}}
      />
    );
    expect(screen.getByTestId("pixel-element")).toHaveStyle({
      background: "lightblue",
    });
  });
  describe("クリックされたとき", () => {
    describe("blankのpixelがクリックされたとき", () => {
      test("mock関数が1回呼ばれる", () => {
        const myMock = jest.fn();
        render(
          <Pixel
            rowIndex={0}
            columnIndex={0}
            status="blank"
            onStatusChange={myMock}
          />
        );
        fireEvent(
          screen.getByTestId("pixel-element"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );
        expect(myMock.mock.calls.length).toBe(1);
      });
      test("呼び出された関数の引数が painted", () => {
        const myMock = jest.fn();
        render(
          <Pixel
            rowIndex={0}
            columnIndex={0}
            status="blank"
            onStatusChange={myMock}
          />
        );
        fireEvent(
          screen.getByTestId("pixel-element"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );
        expect(myMock.mock.calls[0][0]).toBe(0);
        expect(myMock.mock.calls[0][1]).toBe(0);
        expect(myMock.mock.calls[0][2]).toBe("painted");
      });
    });
    describe("paintedのpixelがクリックされたとき", () => {
      test("呼び出された関数の引数が blocked", () => {
        const myMock = jest.fn();
        render(
          <Pixel
            rowIndex={0}
            columnIndex={0}
            status="painted"
            onStatusChange={myMock}
          />
        );
        fireEvent(
          screen.getByTestId("pixel-element"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );
        expect(myMock.mock.calls[0][0]).toBe(0);
        expect(myMock.mock.calls[0][1]).toBe(0);
        expect(myMock.mock.calls[0][2]).toBe("blocked");
      });
    });
    describe("paintedのpixelがクリックされたとき", () => {
      test("呼び出された関数の引数が blocked", () => {
        const myMock = jest.fn();
        render(
          <Pixel
            rowIndex={0}
            columnIndex={0}
            status="painted"
            onStatusChange={myMock}
          />
        );
        fireEvent(
          screen.getByTestId("pixel-element"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );
        expect(myMock.mock.calls[0][0]).toBe(0);
        expect(myMock.mock.calls[0][1]).toBe(0);
        expect(myMock.mock.calls[0][2]).toBe("blocked");
      });
    });
    describe("blockedのpixelがクリックされたとき", () => {
      test("呼び出された関数の引数が blank", () => {
        const myMock = jest.fn();
        render(
          <Pixel
            rowIndex={0}
            columnIndex={0}
            status="blocked"
            onStatusChange={myMock}
          />
        );
        fireEvent(
          screen.getByTestId("pixel-element"),
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );
        expect(myMock.mock.calls[0][0]).toBe(0);
        expect(myMock.mock.calls[0][1]).toBe(0);
        expect(myMock.mock.calls[0][2]).toBe("blank");
      });
    });
  });
});

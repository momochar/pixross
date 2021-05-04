import { render, screen } from "@testing-library/react";
import Board from "./";

test("renders Board", () => {
  render(<Board size={10} />);
});

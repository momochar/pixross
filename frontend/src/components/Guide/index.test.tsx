import { render } from "@testing-library/react";
import Guide from ".";

test("renders Guide", () => {
  render(<Guide guide={3} />);
});

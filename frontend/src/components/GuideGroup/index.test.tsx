import { render } from "@testing-library/react";
import GuideGroup from ".";

test("renders GuideGroup", () => {
  render(<GuideGroup guides={[3, 1, 2]} />);
});

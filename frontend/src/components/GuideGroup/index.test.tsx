import { render } from "@testing-library/react";
import GuideGroup from ".";

test("renders GuideGroup", () => {
  render(<GuideGroup index={2} guides={[3, 1, 2]} direction="column" />);
});

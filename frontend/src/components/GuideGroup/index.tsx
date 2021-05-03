import Guide from "../Guide";
import { Stack } from "@chakra-ui/react";

function GuideGroup(props: { guides: number[]; direction: "column" | "row" }) {
  const guideElement = props.guides.map((g) => <Guide guide={g}></Guide>);
  return (
    <Stack spacing="0px" direction={props.direction}>
      {guideElement}
    </Stack>
  );
}

export default GuideGroup;

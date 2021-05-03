import Guide from "../Guide";
import { Stack } from "@chakra-ui/react";

function GuideGroup(props: {
  guides: number[];
  index: number;
  direction: "column" | "row";
}) {
  const guideElement = props.guides.map((g, i) => (
    <Guide key={`${props.direction}_${props.index}_${i}`} guide={g}></Guide>
  ));
  return (
    <Stack spacing="0px" direction={props.direction}>
      {guideElement}
    </Stack>
  );
}

export default GuideGroup;

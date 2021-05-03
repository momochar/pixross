import Board from "../Board";
import GuideGroup from "../GuideGroup";
import { SimpleGrid } from "@chakra-ui/react";

function Puzzle(props: { size: number }) {
  const tmp = [1, 2, 1, 9];
  const verticalGuideGroup = [...Array(props.size)].map((_, i) => (
    <GuideGroup guides={tmp} key={`v_${i}`}></GuideGroup>
  ));
  const horizontalGuideGroup = [...Array(props.size)].map((_, i) => (
    <GuideGroup guides={tmp} key={`h_${i}`}></GuideGroup>
  ));

  return (
    <div>
      <SimpleGrid columns={2}>
        <SimpleGrid columns={1}></SimpleGrid>
        <SimpleGrid columns={props.size}>{verticalGuideGroup}</SimpleGrid>
        <SimpleGrid columns={1}>{horizontalGuideGroup}</SimpleGrid>
        <Board size={props.size}></Board>
      </SimpleGrid>
    </div>
  );
}

export default Puzzle;

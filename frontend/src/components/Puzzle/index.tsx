import Board from "../Board";
import GuideGroup from "../GuideGroup";
import { SimpleGrid } from "@chakra-ui/react";

function Puzzle(props: { size: number }) {
  const tmp = [1, 2, 1, 9];
  const verticalGuides = [...Array(props.size)].map((_, i) => (
    <GuideGroup guide={tmp} key={`v_${i}`}></GuideGroup>
  ));
  const horizontalGuides = [...Array(props.size)].map((_, i) => (
    <GuideGroup guide={tmp} key={`h_${i}`}></GuideGroup>
  ));

  return (
    <div>
      <SimpleGrid columns={2}>
        <SimpleGrid columns={1}></SimpleGrid>
        <SimpleGrid columns={props.size}>{verticalGuides}</SimpleGrid>
        <SimpleGrid columns={1}>{horizontalGuides}</SimpleGrid>
        <Board size={props.size}></Board>
      </SimpleGrid>
    </div>
  );
}

export default Puzzle;

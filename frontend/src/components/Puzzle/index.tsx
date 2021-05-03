import Board from "../Board";
import Guide from "../Guide";
import { SimpleGrid } from "@chakra-ui/react"

function Puzzle(props: {size: number}) {
  const tmp = [1, 2, 1, 9];
  const verticalGuides = [...Array(props.size)].map((_, i) => <Guide guide={tmp} key={`v_${i}`}></Guide>)
  const horizontalGuides = [...Array(props.size)].map((_, i) => (
    <Guide guide={tmp} key={`h_${i}`}></Guide>
  ));

  return (
    <div>
      <SimpleGrid columns={2}>
        <SimpleGrid columns={1}></SimpleGrid>
        <SimpleGrid columns={props.size}>
          {verticalGuides}
        </SimpleGrid>
        <SimpleGrid columns={1}>
          {horizontalGuides}
        </SimpleGrid>
        <Board size={props.size}></Board>
      </SimpleGrid>
    </div>
  );
}

export default Puzzle;

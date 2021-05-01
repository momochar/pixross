import Board from "../Board";
import Guide from "../Guide";
import { SimpleGrid } from "@chakra-ui/react"

function Puzzle(props: {size: number}) {
  const verticalGuides = [...Array(props.size)].map((_, i) => <Guide key={`v_${i}`}></Guide>)
  const horizontalGuides = [...Array(props.size)].map((_, i) => <Guide key={`h_${i}`}></Guide>)

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
        <Board column={props.size}></Board>
      </SimpleGrid>
    </div>
  );
}

export default Puzzle;

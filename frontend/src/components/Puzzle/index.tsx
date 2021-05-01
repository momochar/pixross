import Board from "../Board";
import Guide from "../Guide";
import { SimpleGrid } from "@chakra-ui/react"

function Puzzle() {
  const columns = 5;

  const verticalGuides = [...Array(columns)].map((_, i) => <Guide key={`v_${i}`}></Guide>)
  const horizontalGuides = [...Array(columns)].map((_, i) => <Guide key={`h_${i}`}></Guide>)

  return (
    <div>
      <SimpleGrid columns={2}>
        <SimpleGrid columns={1}></SimpleGrid>
        <SimpleGrid columns={columns}>
          {verticalGuides}
        </SimpleGrid>
        <SimpleGrid columns={1}>
          {horizontalGuides}
        </SimpleGrid>
        <Board column={columns}></Board>
      </SimpleGrid>
    </div>
  );
}

export default Puzzle;

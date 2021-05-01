import Board from "../Board";
import Guide from "../Guide";
import { SimpleGrid } from "@chakra-ui/react"

function Puzzle() {
  return (
    <div>
      <SimpleGrid columns={2}>
        <SimpleGrid columns={1}></SimpleGrid>
        <SimpleGrid columns={3}>
          <Guide></Guide>
          <Guide></Guide>
          <Guide></Guide>
        </SimpleGrid>
        <SimpleGrid columns={1}>
          <Guide></Guide>
          <Guide></Guide>
          <Guide></Guide>
        </SimpleGrid>
        <Board column={3}></Board>
      </SimpleGrid>
    </div>
  );
}

export default Puzzle;

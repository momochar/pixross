import Board from "../Board";
import Guide from "../Guide";
import { SimpleGrid } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

function Puzzle() {
  return (
    <div>
      <SimpleGrid columns={2}>
        <Box></Box>
        <Box><Guide></Guide></Box>
        <Box><Guide></Guide></Box>
        <Box><Board></Board></Box>
      </SimpleGrid>
    </div>
  );
}

export default Puzzle;

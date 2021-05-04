
import { Stack, Button } from "@chakra-ui/react";

function PuzzleChoice() {
  return (
    <Stack justify="center" spacing={4} direction="row" align="center">
      <Button colorScheme="teal" size="md">
        Puzzle 1
      </Button>
      <Button colorScheme="teal" size="md">
        Puzzle 2
      </Button>
      <Button colorScheme="teal" size="md">
        Puzzle 3
      </Button>
    </Stack>
  );
}

export default PuzzleChoice;
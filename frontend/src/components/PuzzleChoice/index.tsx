import { Stack, Button } from "@chakra-ui/react";
import { PuzzleId } from "../../types";

function PuzzleChoice(props: {
  puzzleIds: PuzzleId[];
  choicedPuzzleId: PuzzleId;
  onChangeChoice: (puzzleId: PuzzleId) => void;
}) {
  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    props.onChangeChoice(Number(event.currentTarget.value));
  };
  return (
    <Stack justify="center" spacing={4} direction="row" align="center">
      <Button colorScheme="teal" size="md" value="0" onClick={handleOnClick}>
        Puzzle 1
      </Button>
      <Button colorScheme="teal" size="md" value="1" onClick={handleOnClick}>
        Puzzle 2
      </Button>
      <Button colorScheme="teal" size="md" value="2" onClick={handleOnClick}>
        Puzzle 3
      </Button>
    </Stack>
  );
}

export default PuzzleChoice;

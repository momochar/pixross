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

  const buttons = props.puzzleIds.map((puzzleId) => {
    return (
      <Button
        colorScheme="teal"
        size="md"
        value={puzzleId}
        onClick={handleOnClick}
        key={puzzleId}
      >
        Puzzle {puzzleId + 1}
      </Button>
    );
  });

  return (
    <Stack justify="center" spacing={4} direction="row" align="center">
      {buttons}
    </Stack>
  );
}

export default PuzzleChoice;

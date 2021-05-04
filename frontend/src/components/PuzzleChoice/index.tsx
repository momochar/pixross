import { Stack, Button } from "@chakra-ui/react";

function PuzzleChoice(props: {
  choicedPuzzleId: number;
  onChangeChoice: () => void;
}) {
  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(event.target);
    props.onChangeChoice();
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

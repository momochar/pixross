import Board from "../Board";
import GuideGroup from "../GuideGroup";
import { SimpleGrid } from "@chakra-ui/react";

export function createGuide(puzzle: number[][]) {
  const rows = puzzle.map((line: number[]) => {
    return line
      .reduce(
        (previous: number[], current: number) => {
          if (current === 0) {
            previous.push(0);
          } else {
            if (previous.length > 0) {
              previous[previous.length - 1] = previous[previous.length - 1] + 1;
            } else {
              previous.push(1);
            }
          }
          return previous;
        },
        []
      )
      .filter((n: number) => n > 0);
  });

  return {
    column: [[1, 1], [1], [1, 1]],
    row: rows,
  };
}

function Puzzle(props: { size: number; puzzle: number[][] }) {
  const tmp = [1, 2, 1, 9];
  const verticalGuideGroup = [...Array(props.size)].map((_, i) => (
    <GuideGroup
      guides={tmp}
      key={`v_${i}`}
      index={i}
      direction="column"
    ></GuideGroup>
  ));
  const horizontalGuideGroup = [...Array(props.size)].map((_, i) => (
    <GuideGroup
      guides={tmp}
      key={`h_${i}`}
      index={i}
      direction="row"
    ></GuideGroup>
  ));

  return (
    <div>
      <SimpleGrid columns={2}>
        <SimpleGrid columns={1}></SimpleGrid>
        <SimpleGrid columns={props.size}>{verticalGuideGroup}</SimpleGrid>
        <SimpleGrid columns={1}>{horizontalGuideGroup}</SimpleGrid>
        <Board size={props.size}></Board>
      </SimpleGrid>
    </div>
  );
}

export default Puzzle;

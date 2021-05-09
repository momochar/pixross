import Board from "../Board";
import GuideGroup from "../GuideGroup";
import { SimpleGrid, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { PixelStatus } from "../../types";

export function createGuide(puzzle: number[][]) {
  const rows = extractGuideData(puzzle);

  const transposedPuzzle = puzzle[0].map((_, c) => puzzle.map((r) => r[c]));
  const columns = extractGuideData(transposedPuzzle);

  return {
    columns: columns,
    rows: rows,
  };
}

function extractGuideData(puzzle: number[][]) {
  return puzzle.map((line: number[]) => {
    return line
      .reduce((previous: number[], current: number) => {
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
      }, [])
      .filter((n: number) => n > 0);
  });
}

export function updateStatuses(
  rowIndex: number,
  columnIndex: number,
  nextStatus: PixelStatus,
  currentStatuses: PixelStatus[][]
) {
  const nextStatuses = currentStatuses.map((row) =>
    row.map((status) => status)
  );
  nextStatuses[rowIndex][columnIndex] = nextStatus;
  return nextStatuses;
}

export function isCorrect(statuses: PixelStatus[][], puzzle: number[][]) {
  const convertedStatuses = statuses.map((row) =>
    row.map((status) => (status === "painted" ? 1 : 0))
  );
  const jsonOfStatuses = JSON.stringify(convertedStatuses);
  const jsonOfPuzzle = JSON.stringify(puzzle);
  return jsonOfStatuses === jsonOfPuzzle;
}

function Puzzle(props: {
  // TODO: 削除する
  size?: number;
  puzzle: number[][];
}) {
  const [statuses, setStatuses] = useState([] as PixelStatus[][]);

  useEffect(() => {
    setStatuses(props.puzzle.map((rows) => rows.map((_) => "blank")));
  }, [props.puzzle]);

  const { columns, rows } = createGuide(props.puzzle);
  const verticalGuideGroup = columns.map((column, index) => (
    <GuideGroup
      guides={column}
      key={`v_${index}`}
      index={index}
      direction="column"
    ></GuideGroup>
  ));
  const horizontalGuideGroup = rows.map((row, index) => (
    <GuideGroup
      guides={row}
      key={`h_${index}`}
      index={index}
      direction="row"
    ></GuideGroup>
  ));

  const toast = useToast();

  const onStatusChange = (
    rowIndex: number,
    columnIndex: number,
    nextStatus: PixelStatus
  ) => {
    const updatedStatuses = updateStatuses(
      rowIndex,
      columnIndex,
      nextStatus,
      statuses
    );
    setStatuses(updatedStatuses);
    if (isCorrect(updatedStatuses, props.puzzle)) {
      toast({
        title: "Clear!!!",
        description: "Congratulations!!!!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <SimpleGrid columns={2}>
        <SimpleGrid columns={1}></SimpleGrid>
        <SimpleGrid columns={props.puzzle[0].length}>
          {verticalGuideGroup}
        </SimpleGrid>
        <SimpleGrid columns={1}>{horizontalGuideGroup}</SimpleGrid>
        <Board statuses={statuses} onStatusChange={onStatusChange}></Board>
      </SimpleGrid>
    </div>
  );
}

export default Puzzle;

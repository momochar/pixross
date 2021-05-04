import Board from "../Board";
import GuideGroup from "../GuideGroup";
import { SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
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
  
} 

function Puzzle(props: { size: number; puzzle: number[][] }) {
  const [statuses, setStatuses] = useState(
    props.puzzle.map((rows) => rows.map((_) => "blank")) as PixelStatus[][]
  );

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

  const onStatusChange = (
    rowIndex: number,
    columnIndex: number,
    nextStatus: PixelStatus
  ) => {
    setStatuses(updateStatuses(rowIndex, columnIndex, nextStatus, statuses));
    // TODO: 正解かどうか判定するロジックを追加→正解していたらtoastを表示
  };

  return (
    <div>
      <SimpleGrid columns={2}>
        <SimpleGrid columns={1}></SimpleGrid>
        <SimpleGrid columns={props.size}>{verticalGuideGroup}</SimpleGrid>
        <SimpleGrid columns={1}>{horizontalGuideGroup}</SimpleGrid>
        <Board
          size={props.size}
          statuses={statuses}
          onStatusChange={onStatusChange}
        ></Board>
      </SimpleGrid>
    </div>
  );
}

export default Puzzle;

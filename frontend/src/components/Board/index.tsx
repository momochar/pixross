import Pixel from "../Pixel";
import { SimpleGrid } from "@chakra-ui/react";
import { PixelStatus } from "../../types";

function Board(props: {
  statuses: PixelStatus[][];
  onStatusChange: (
    rowIndex: number,
    columnIndex: number,
    nextStatus: PixelStatus
  ) => void;
}) {
  const onStatusChange = (
    rowIndex: number,
    columnIndex: number,
    nextStatus: PixelStatus
  ) => {
    props.onStatusChange(rowIndex, columnIndex, nextStatus);
  };

  const listItems = props.statuses
    .map((row, rowIndex) =>
      row.map((status, columnIndex) => (
        <Pixel
          key={`${rowIndex}_${columnIndex}`}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          status={status}
          onStatusChange={onStatusChange}
        ></Pixel>
      ))
    )
    .flat();

  return (
    <SimpleGrid columns={props.statuses[0]?.length ?? 0}>
      {listItems}
    </SimpleGrid>
  );
}

export default Board;

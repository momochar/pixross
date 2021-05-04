import Pixel from "../Pixel";
import { SimpleGrid } from "@chakra-ui/react";
import { PixelStatus } from "../../types";

function Board(props: { size: number; statuses: PixelStatus[][] }) {
  const onStatusChange = (
    rowIndex: number,
    columnIndex: number,
    nextStatus: PixelStatus
  ) => {
    // TODO: 親であるPuzzleから更新関数を受け取って、それを呼び出す
    console.log(rowIndex);
    console.log(columnIndex);
    console.log(nextStatus);
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

  return <SimpleGrid columns={props.size}>{listItems}</SimpleGrid>;
}

export default Board;

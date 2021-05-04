import Pixel from "../Pixel";
import { SimpleGrid } from "@chakra-ui/react";
import { PixelStatus } from "../../types";

function Board(props: { size: number; statuses: PixelStatus[][] }) {
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

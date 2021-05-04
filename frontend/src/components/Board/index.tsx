import Pixel from "../Pixel";
import { SimpleGrid } from "@chakra-ui/react";
import { PixelStatus } from "../../types";

function Board(props: { size: number; statuses: PixelStatus[][] }) {
  const listItems = props.statuses.flat().map((status, i) => (
    <Pixel key={i} status={status}></Pixel>
  ));

  return <SimpleGrid columns={props.size}>{listItems}</SimpleGrid>;
}

export default Board;

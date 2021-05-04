import Pixel from "../Pixel";
import { SimpleGrid } from "@chakra-ui/react";

function Board(props: { size: number }) {
  const listItems = [...Array(props.size ** 2)].map((_, i) => (
    <Pixel key={i}></Pixel>
  ));

  return <SimpleGrid columns={props.size}>{listItems}</SimpleGrid>;
}

export default Board;

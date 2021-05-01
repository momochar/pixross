import Pixel from "../Pixel";
import { SimpleGrid } from "@chakra-ui/react";

function Board(props: { column: number }) {
  const listItems = [...Array(props.column ** 2)].map((_, i) => <Pixel key={i}></Pixel>);

  return <SimpleGrid columns={props.column}>{listItems}</SimpleGrid>;
 
}

export default Board;

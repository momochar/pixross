import { Box } from "@chakra-ui/react";
import { PixelStatus } from "../../types";

function Pixel(props: {
  rowIndex: number;
  columnIndex: number;
  status: PixelStatus;
  onStatusChange: (
    rowIndex: number,
    columnIndex: number,
    nextStatus: PixelStatus
  ) => void;
}) {
  const handleOnClick = () => {
    let nextStatus: PixelStatus;
    if (props.status === "blank") {
      nextStatus = "painted";
    } else if (props.status === "painted") {
      nextStatus = "blocked";
    } else {
      nextStatus = "blank";
    }
    props.onStatusChange(props.rowIndex, props.columnIndex, nextStatus);
  };

  const background = (status: PixelStatus) => {
    switch (status) {
      case "blank":
        return "white";
      case "painted":
        return "lightblue";
      case "blocked":
        return "lightgray";
    }
  };

  const inner = (status: PixelStatus) => {
    return status === "blocked" ? <CloseIcon color="red.500" /> : null;
  };

  return (
    <Box
      data-testid="pixel-element"
      outline="solid 1px"
      bg={background(props.status)}
      w="100%"
      h="32px"
      p={0}
      onClick={handleOnClick}
    >
      {inner(props.status)}
    </Box>
  );
}

export default Pixel;

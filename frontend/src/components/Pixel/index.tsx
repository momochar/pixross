import { Box } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { PixelStatus } from "../../types";
import React, { useContext } from "react";
import { PixelSizeContext } from "../Puzzle";

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
        return "white";
    }
  };

  const inner = (status: PixelStatus) => {
    return status === "blocked" ? <CloseIcon color="red.500" /> : null;
  };

  const pixelSize = React.useContext(PixelSizeContext);

  return (
    <Box
      data-testid="pixel-element"
      outline="solid 1px"
      bg={background(props.status)}
      w={useContext(PixelSizeContext)}
      h={useContext(PixelSizeContext)}
      p={0}
      onClick={handleOnClick}
    >
      {inner(props.status)}
    </Box>
  );
}

export default Pixel;

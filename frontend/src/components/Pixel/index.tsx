import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { PixelStatus } from "../../types";

function Pixel(props: {
  status: PixelStatus;
  onStatusChange: (nextStatus: PixelStatus) => void;
}) {
  const handleOnClick = () => {
    let nextStatus: PixelStatus;
    if (props.status === "blank") {
      nextStatus = "painted";
    } else {
      nextStatus = "blank";
    }
    props.onStatusChange(nextStatus);
  };

  const background = props.status === "blank" ? "white" : "lightblue";

  return (
    <Box
      data-testid="pixel-element"
      outline="solid 1px"
      bg={background}
      w="100%"
      p={0}
      onClick={handleOnClick}
    ></Box>
  );
}

export default Pixel;

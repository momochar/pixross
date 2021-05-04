import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { PixelStatus } from "../../types";

function Pixel(props: { status: PixelStatus }) {
  const [status, setStatus] = useState("blank" as PixelStatus);

  const handleOnClick = () => {
    if (status === "blank") {
      setStatus("painted");
    } else {
      setStatus("blank");
    }
  };

  const background = status === "blank" ? "white" : "lightblue";

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

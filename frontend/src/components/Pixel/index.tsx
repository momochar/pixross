import { Box } from "@chakra-ui/react";
import { useState } from "react";

// type PixelStatus = "blank" | "painted" | "blocked";

function Pixel() {
  const [status, setStatus] = useState("blank");

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

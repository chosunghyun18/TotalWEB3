import React, { FC } from "react";
import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Main: FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      Main
      <Button onClick={() => navigate("/test")}>test</Button>
    </Box>
  );
};

export default Main;

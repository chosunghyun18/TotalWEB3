import React, { FC } from "react";
import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface MainProps {
  account : string ;
}

const Main: FC<MainProps> = ({account}) => {
  const navigate = useNavigate();

  return (
    <Box>
      Main
      <Button onClick={() => navigate("/test")}>test</Button>
    </Box>
  );
};

export default Main;

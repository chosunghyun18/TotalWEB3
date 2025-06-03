import React, { FC,useState} from "react";
import { Box, Button, Text,Flex} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface MainProps {
  account : string ;
}

const Main: FC<MainProps> = ({account}) => {
  const navigate = useNavigate();
  const [newAnimalCard, setNewAnimalCard] = useState<string>();
  const onClickMint = () => {};
  return (
    <Flex
      w="full"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      direction="column">
      <Box>
        {newAnimalCard ? (
          <div>🦁AnimalCard</div>
        ) : (
          <Text>Let's mint Animal Card!!!</Text>
        )}
      </Box>
      <Button mt={4} size="sm" colorScheme="blue" onClick={onClickMint}>
        Mint
      </Button>

      <Box>
        <Button onClick={() => navigate("/test")}>test</Button>
      </Box>
    </Flex>
  );
};

export default Main;

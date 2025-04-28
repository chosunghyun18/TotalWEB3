import React from 'react';
import { Box, Container, Heading, Text, Button, Flex, Stack, useColorModeValue } from '@chakra-ui/react';

function App() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'gray.100');

  return (
    <Box bg={bgColor} minH="100vh">
      <Container maxW="container.xl" py={10}>
        {/* 헤더 섹션 */}
        <Flex 
          as="header" 
          alignItems="center" 
          justifyContent="space-between"
          mb={10}
        >
          <Heading color="blue.500" size="lg">JOSH WEB</Heading>
          <Stack direction="row" spacing={4}>
            <Button variant="ghost">홈</Button>
            <Button variant="ghost">서비스</Button>
            <Button variant="ghost">포트폴리오</Button>
            <Button variant="ghost">연락처</Button>
          </Stack>
        </Flex>
        
        {/* 메인 환영 섹션 */}
        <Box textAlign="center" py={20}>
          <Heading 
            as="h1" 
            size="2xl" 
            mb={6} 
            color={textColor}
          >
            Welcome to JOSH WEB Page
          </Heading>
          <Text fontSize="xl" mb={10} color={textColor}>
            웹3와 블록체인 기술로 미래를 함께 만들어갑니다.
          </Text>
          <Button 
            size="lg" 
            colorScheme="blue" 
            px={8}
          >
            시작하기
          </Button>
        </Box>
        
        {/* 푸터 섹션 */}
        <Box as="footer" mt={20} textAlign="center" color="gray.500">
          <Text>&copy; 2025 JOSH WEB. All rights reserved.</Text>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
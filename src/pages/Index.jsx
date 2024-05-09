import React, { useState } from "react";
import { Container, Button, Box, Text, VStack, Heading } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

const Index = () => {
  const [isGameRunning, setGameRunning] = useState(false);
  const [score, setScore] = useState(0);

  const startGame = () => {
    setGameRunning(true);
    // Here you would initialize your game logic
  };

  const gameArea = (
    <Box width="100%" height="500px" bg="gray.300" position="relative">
      {/* Game rendering would happen here. For now, it's just a placeholder */}
      {isGameRunning ? (
        <Text color="white" fontSize="2xl">
          Game is running...
        </Text>
      ) : (
        <Text color="white" fontSize="2xl">
          Press play to start the game!
        </Text>
      )}
    </Box>
  );

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="xl">
          Subway Runner
        </Heading>
        <Text fontSize="lg">Score: {score}</Text>
        <Button leftIcon={<FaPlay />} colorScheme="teal" variant="solid" onClick={startGame} disabled={isGameRunning}>
          Start Game
        </Button>
        {gameArea}
      </VStack>
    </Container>
  );
};

export default Index;

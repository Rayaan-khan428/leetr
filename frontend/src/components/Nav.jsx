import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Flex, Button, useColorModeValue, Stack, useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === 'light' ? <MoonIcon color="white" /> : <SunIcon color="white" />;
  return <Button onClick={toggleColorMode} variant="ghost">{icon}</Button>;
}



// Main navigation component
export default function Nav() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={0}
      p={4}
      bg={useColorModeValue('black', 'black')}
      color={useColorModeValue('white', 'white')}
    >
      <Link to="/">
        <Box fontFamily="'Orbitron', sans-serif" fontWeight="700" fontSize="40px">
          Leetr
        </Box>
      </Link>

      <Stack direction="row" spacing={4} align="center">
        <ThemeToggleButton />
        <Link to="/main"><Button>Dashboard</Button></Link>
      </Stack>
    </Flex>
  );
}

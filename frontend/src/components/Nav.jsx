import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CheckProblemsButton from './CheckProblemsButton';

function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === 'light' ? <MoonIcon /> : <SunIcon />;
  return <Button onClick={toggleColorMode}>{icon}</Button>;
}

function UserMenu() {
  const avatarUrl = "https://avatars.dicebear.com/api/male/username.svg"; // Replace with your avatar logic
  
  return (
    <Menu>
      <MenuButton as={Button} rounded="full" variant="link" cursor="pointer" minW={0}>
        <Avatar size="sm" src={avatarUrl} />
      </MenuButton>
      <MenuList align="center">
        <Center><Avatar size="2xl" src={avatarUrl} /></Center>
        <Center><p>Username</p></Center>
        <MenuDivider />
        <MenuItem>Your Servers</MenuItem>
        <MenuItem>Account Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default function Nav() {

  const [phoneNumber, setPhoneNumber] = useState('16474706561');
  const handleSmsSignup = async () => {
    try {
      await axios.post('http://localhost:3000/signup-sms', { phoneNumber });
      alert("SMS sent successfully!");
    } catch (error) {
      console.error('Error sending SMS:', error);
      alert("Failed to send SMS.");
    }
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={0}
      p={4}
      bg={useColorModeValue('white.100', 'white.900')}
      color={useColorModeValue('gray.600', 'white')}
    >
      <Link to="/">
        <Box fontFamily="'Orbitron', sans-serif" fontWeight="700" fontSize="40px">
          Leetr
        </Box>
      </Link>

      <Stack direction="row" spacing={7} align="center">
        <ThemeToggleButton />
        <UserMenu />

        {/* Sign Up for SMS Button */}
        <Button colorScheme="blue" variant="solid" onClick={handleSmsSignup}>
          Sign Up for SMS
        </Button>

        <CheckProblemsButton/>

      </Stack>
    </Flex>
  );
}

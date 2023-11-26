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
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';

const NavLink = ({ children }) => (
  <Box
    as="a"
    px={2}
    py={1}
    rounded="md"
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href="#"
  >
    {children}
  </Box>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={4}
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.600', 'white')}
    >
      <Link to="/">
        <Box
          fontFamily="'Orbitron', sans-serif"
          fontWeight="700"
          fontSize="40px"
          display="inline-block"
        >
          Leetr
        </Box>
      </Link>
      
      <Stack direction="row" spacing={7} align="center">
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>

        <Menu>
          <MenuButton
            as={Button}
            rounded="full"
            variant="link"
            cursor="pointer"
            minW={0}
          >
            <Avatar
              size="sm"
              src="https://avatars.dicebear.com/api/male/username.svg"
            />
          </MenuButton>
          <MenuList align="center">
            <Center>
              <Avatar
                size="2xl"
                src="https://avatars.dicebear.com/api/male/username.svg"
              />
            </Center>
            <Center>
              <p>Username</p>
            </Center>
            <MenuDivider />
            <MenuItem>Your Servers</MenuItem>
            <MenuItem>Account Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Flex>
  );
}

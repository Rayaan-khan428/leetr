import React from 'react';
import {
  Box,
  Button,
  VStack,
  HStack,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Icon,
  Stack,
  Image,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { FaChartLine, FaPuzzlePiece, FaUsers, FaRegSmileBeam } from 'react-icons/fa';

// Example feature data
const features = [
  // ... same features array as before ...
];

// Example testimonials data (replace with real data)
const testimonials = [
  {
    avatar: 'https://via.placeholder.com/150',
    name: 'John Doe',
    content: 'This app has transformed the way I prepare for coding interviews.',
  },
  // ... additional testimonials ...
];

export default function Homepage() {
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Box bg={bgColor}>
      <Container maxW={'7xl'} py={12} as={Stack} spacing={12}>
        
        {/* Hero Section */}
        <Stack direction={{ base: 'column', md: 'row' }} spacing={6} align={'center'} justify={'space-between'}>
          <VStack align={'start'} maxW={'xl'} spacing={5}>
            <Heading fontSize={{ base: '3xl', md: '5xl' }} textAlign={{ base: 'center', md: 'left' }}>
              A Tool to Track Your Leetcode Stats
            </Heading>
            <Text fontSize={'xl'} color={textColor} textAlign={{ base: 'center', md: 'left' }}>
              A clean dashboard to track and organize your leetcode stats, notes, and usage.
            </Text>
            <Button size={'lg'} colorScheme={'blue'}>
              Get Started
            </Button>
            <HStack spacing={2}>
              <Text fontSize={'sm'} color={textColor}>
                Already a member?
              </Text>
              <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                Sign in
              </Button>
            </HStack>
          </VStack>
          <Box flexShrink={0}>
            <Image
              borderRadius={15}
              src='https://via.placeholder.com/400'
              alt='Hero Image'
              objectFit='cover'
            />
          </Box>
        </Stack>

        <Divider my={10} />

        {/* Features Section */}
        <Box as={'section'} pt={10}>
          <Heading as={'h3'} fontSize={'2xl'} mb={6} textAlign={'center'}>
            Why Choose Leetr?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {features.map((feature, index) => (
              <VStack key={index} align={'start'} spacing={3}>
                <Icon as={feature.icon} w={10} h={10} color={'blue.500'} />
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={textColor}>{feature.description}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>

        <Divider my={10} />

        {/* Testimonials Section */}
        <Box as={'section'} pt={10}>
          <Heading as={'h3'} fontSize={'2xl'} mb={6} textAlign={'center'}>
            Testimonials
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {testimonials.map((testimonial, index) => (
              <VStack key={index} align={'start'} spacing={3}>
                <Image
                  borderRadius={'full'}
                  boxSize={'50px'}
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <Text fontWeight={600}>{testimonial.name}</Text>
                <Text color={textColor}>"{testimonial.content}"</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>

        <Divider my={10} />

        {/* Call to Action Section */}
        <Box as={'section'} pt={10} textAlign={'center'}>
          <Heading as={'h3'} fontSize={'2xl'} mb={6}>
            Join Our Community
          </Heading>
          <Text fontSize={'xl'} color={textColor} mb={6}>
            Become a part of the Leetr community and take your coding skills to the next level.
          </Text>
          <Button size={'lg'} colorScheme={'orange'}>
            Join Now
          </Button>
        </Box>

      </Container>
    </Box>
  );
}

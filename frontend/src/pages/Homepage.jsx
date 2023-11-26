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
} from '@chakra-ui/react';
import { FaChartLine, FaPuzzlePiece, FaUsers, FaRegSmileBeam } from 'react-icons/fa';

const features = [
  { icon: FaChartLine, title: 'Custom Analytics', description: 'Gain insights into your coding habits and progress.' },
  { icon: FaPuzzlePiece, title: 'Problem Organization', description: 'Leverage spaced repitition to never forget a problem.' },
  { icon: FaUsers, title: 'Community Forums', description: 'Get SMS Texts when it is time to repeat a problem.' },
  { icon: FaRegSmileBeam, title: 'Interactive Learning', description: 'Interactive challenges to enhance your skills.' },
];

const testimonials = [
  { avatar: 'https://via.placeholder.com/150', name: 'Jane Doe', content: 'This app revolutionized my learning process.' },
  { avatar: 'https://via.placeholder.com/150', name: 'Mike Chen', content: 'The community support is just amazing.' },
];

export default function Homepage() {
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Box bg={bgColor}>
      <Container maxW={'7xl'} py={12}>

        {/* Hero Section */}
        <Stack direction={{ base: 'column', md: 'row' }} spacing={6} align={'center'} justify={'space-between'}>
          <VStack align={'start'} spacing={5}>
            <Heading fontSize={{ base: '3xl', md: '5xl' }}>Master Coding with Leetr</Heading>
            <Text fontSize={'xl'} color={textColor}>
              Your personal dashboard for tracking coding progress and more.
            </Text>
            <Button colorScheme={'blue'} size={'lg'}>Get Started</Button>
          </VStack>
          <Image
            borderRadius={15}
            src='https://via.placeholder.com/400'
            alt='Coding Illustration'
            objectFit='cover'
          />
        </Stack>

        {/* Features Section */}
        <Box as={'section'} py={12}>
          <Heading as={'h3'} fontSize={'2xl'} mb={6} textAlign={'center'}>Key Features</Heading>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
            {features.map((feature, index) => (
              <VStack key={index} align={'start'} spacing={3}>
                <Icon as={feature.icon} w={10} h={10} color={'blue.500'} />
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={textColor}>{feature.description}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>

        {/* Testimonials Section */}
        <Box as={'section'} py={12} bg={useColorModeValue('white', 'gray.800')}>
          <Heading as={'h3'} fontSize={'2xl'} mb={6} textAlign={'center'}>Testimonials</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} px={12}>
            {testimonials.map((testimonial, index) => (
              <VStack key={index} align={'start'} spacing={3} bg={bgColor} p={6} borderRadius={'md'} boxShadow={'md'}>
                <Image borderRadius={'full'} boxSize={'50px'} src={testimonial.avatar} alt={testimonial.name} />
                <Text fontWeight={600}>{testimonial.name}</Text>
                <Text color={textColor}>"{testimonial.content}"</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>

      </Container>
    </Box>
  );
}

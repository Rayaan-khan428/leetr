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
import { Link } from 'react-router-dom';

const features = [
  { icon: FaChartLine, title: 'Custom Analytics', description: 'Gain insights into your coding habits and progress.' },
  { icon: FaPuzzlePiece, title: 'Spaced Repitition', description: 'Leverage spaced repitition to never forget a problem.' },
  { icon: FaUsers, title: 'SMS Texts', description: 'Get SMS Texts when it is time to repeat a problem.' },
  { icon: FaUsers, title: 'SMS Texts', description: 'Get SMS Texts when it is time to repeat a problem.' },
];

const testimonials = [
  { avatar: 'https://pbs.twimg.com/media/Fze4WD3aIAAbMeN?format=jpg&name=4096x4096', name: 'Neetcode', content: "If this doesn't get Y-Comb backed, IDEK" },
  { avatar: 'https://yt3.googleusercontent.com/ytc/APkrFKZkincAm9JfVMQKtktjhExR_7wxnPtQTnYb_-kR=s900-c-k-c0x00ffffff-no-rj', name: 'Abdul Bari', content: 'Friends, this website is optimal for gains' },
];

export default function Homepage() {
  const bgColor = useColorModeValue('white.100', 'white.700');
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
            <Link to='/main'>
            <Button colorScheme={'blue'} size={'lg'}>Go to Dashboard</Button>
            </Link>
          </VStack>
          <Image
            borderRadius={15}
            src='https://img.freepik.com/premium-photo/database-programmer-playing-guitar-with-keyboard-writing-code-with-cloud-computing-programming-html-source-cheerful-smiling-developer-having-fun-acting-silly-office_482257-59031.jpg'
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

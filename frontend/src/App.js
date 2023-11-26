import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react'
import ProblemsTable from './components/ProblemsTable';
import Nav from './components/Nav';
import Footer from './components/Footer';
import DifficultyDistributionChart from './components/DifficultyDistributionChart';

function App() {
  return (
    <ChakraProvider>
      <Nav/>
      
      <Box width="50%" maxW="250px" mx="auto" my={4} p={4}>
        <DifficultyDistributionChart />
      </Box>


      
      <ProblemsTable/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;

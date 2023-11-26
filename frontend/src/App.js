import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import ProblemsTable from './components/ProblemsTable';
import Nav from './components/Nav';
import LargeWithNewsletter from './components/LargeWithNewsletter';

function App() {
  return (
    <ChakraProvider>
      <Nav/>
      <ProblemsTable/>
      <LargeWithNewsletter/>
    </ChakraProvider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import ProblemsTable from './components/ProblemsTable';

function App() {
  return (
    <ChakraProvider>
      <ProblemsTable/>
    </ChakraProvider>
  );
}

export default App;

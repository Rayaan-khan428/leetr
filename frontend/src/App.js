import './App.css';
import { ChakraProvider} from '@chakra-ui/react'
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Main from './pages/Main';

function App() {
  const username = "numb3r5"; // Replace with the actual username

  return (
    <Router>
      <ChakraProvider>  
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/main" element={<Main username={username} />} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

export default App;

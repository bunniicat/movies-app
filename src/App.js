import * as React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './Components/NavBar';
import theme from './theme';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <MainPage />
    </ChakraProvider>
  );
}

export default App;

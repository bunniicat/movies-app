import * as React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './Components/NavBar';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
    </ChakraProvider>
  );
}

export default App;

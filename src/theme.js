import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      //body
      body: {
        bg: '#181818',
        color: 'whiteAlpha.900',
      },
    },
  },
});

export default theme;

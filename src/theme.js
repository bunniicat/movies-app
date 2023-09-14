import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      //body
      body: {
        bg: '#181818',
        color: '#2F2F2F',
      },
    },
  },
});

export default theme;

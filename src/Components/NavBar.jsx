import { Box, Flex, HStack, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import { MdMovieFilter } from 'react-icons/md';
import { Search2Icon, QuestionIcon } from '@chakra-ui/icons';

const NavBar = () => {
  return (
    <Box width={'90%'} margin={'auto'}>
      <Flex justifyContent={'space-between'} alignItems={'center'} padding={'15px'}>
        <HStack>
          <MdMovieFilter fontSize={'40px'} color={'white'} />
          <Text fontSize={'1.3em'} fontWeight={'bold'} color={'whiteAlpha.900'}>
            Movie Searching
          </Text>
        </HStack>

        <Box>
          <InputGroup w={'500px'}>
            <InputLeftElement pointerEvents={'none'}>
              <Search2Icon color={'gray.300'} />
            </InputLeftElement>
            <Input
              placeholder='Search for movie...'
              focusBorderColor='#f42272'
              _placeholder={{ color: 'whiteAlpha.700' }}
              color={'whiteAlpha.900'}
            />
          </InputGroup>
        </Box>

        <HStack>
          <QuestionIcon />
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;

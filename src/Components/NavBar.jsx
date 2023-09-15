import { Box, Flex, HStack, Text, Tooltip } from '@chakra-ui/react';
import { MdMovieFilter } from 'react-icons/md';
import { QuestionIcon } from '@chakra-ui/icons';

const NavBar = () => {
  return (
    <Box width={'90%'} margin={'auto'}>
      <Flex justifyContent={'space-between'} alignItems={'center'} padding={'15px'}>
        <HStack>
          <MdMovieFilter fontSize={'40px'} color={'white'} />
          <Text fontSize={'1.3em'} fontWeight={'bold'}>
            Movie Searching
          </Text>
        </HStack>

        <HStack>
          <Tooltip label='search for a movie by movie title using the search bar' aria-label='a tooltip'>
            <QuestionIcon fontSize={'20px'} />
          </Tooltip>
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;

import { Box, Flex, HStack, Heading, VStack, Text, Image, Divider, Tag } from '@chakra-ui/react';

const MovieResult = ({ movie }) => {
  let movieGenre = movie.Genre.split(',');

  return (
    <Box mt={'30px'} borderBottom={'2px solid #dc0073'} paddingBottom={'30px'}>
      <Flex justifyContent={'space-between'} flexDirection={{ base: 'column', lg: 'row' }}>
        <Box>
          <Heading>{movie.Title}</Heading>
          <HStack mb={'10px'}>
            <Text> {movie.Runtime}</Text>
            <Text> {movie.Rated}</Text>
          </HStack>
          <Divider />
          <HStack mt={'10px'}>
            {movieGenre.map((genre) => {
              return (
                <Tag color={'white'} backgroundColor={'#6e1040'} size={'md'} key={genre}>
                  {genre}
                </Tag>
              );
            })}
          </HStack>
          <Text mt={'10px'}>Director: {movie.Director}</Text>
          <Text>Writer: {movie.Writer}</Text>
          <Text mt={'10px'}>{movie.Plot}</Text>
          <Text fontWeight={'medium'} mt={'30px'}>
            Ratings
          </Text>
          <HStack spacing={'10'} mt={'10px'}>
            <VStack backgroundColor={'#dc0073'} padding={'10px'} rounded={'md'}>
              <Text>{movie.Ratings[0].Source}</Text>
              <Text>{movie.Ratings[0].Value}</Text>
            </VStack>
            <VStack backgroundColor={'#dc0073'} padding={'10px'} rounded={'md'}>
              <Text>{movie.Ratings[1].Source}</Text>
              <Text>{movie.Ratings[1].Value}</Text>
            </VStack>
            <VStack backgroundColor={'#dc0073'} padding={'10px'} rounded={'md'}>
              <Text>{movie.Ratings[2].Source}</Text>
              <Text>{movie.Ratings[2].Value}</Text>
            </VStack>
          </HStack>
        </Box>
        <Box border={'2px solid #dc0073'} padding={'10px'} rounded={'md'} mt={{ base: '20px', lg: '0px' }}>
          <Image src={movie.Poster} alt='movie poster' rounded={'md'} margin={'auto'} />
        </Box>
      </Flex>
    </Box>
  );
};

export default MovieResult;

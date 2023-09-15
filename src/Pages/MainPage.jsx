import { Box, Button, Heading, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieResult from '../Components/MovieResult';
import { SearchIcon } from '@chakra-ui/icons';

const MainPage = () => {
  const [movie, setMovie] = useState(null);
  const [searchTitle, setSearchTitle] = useState(null);
  const [hasMovieResult, setHasMovieResult] = useState(false);

  const apikey = 'd1e0c1c5';

  const handleSearchInputChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const handleSearch = async () => {
    const searchUrl = `http://omdbapi.com/?t=${searchTitle}&apikey=${apikey}`;

    const response = await axios.get(searchUrl);
    setMovie(response.data);
  };

  useEffect(() => {
    if (movie === null) {
      setHasMovieResult(false);
    } else {
      setHasMovieResult(true);
    }
  }, [movie]);

  return (
    <Box w={'90%'} margin={'auto'} padding={'15px'} marginTop={'30px'}>
      <InputGroup width={'50%'} margin={'auto'} mb={'50px'}>
        <Input rounded={'3xl'} onChange={handleSearchInputChange} placeholder='Search movie by name...' />
        <InputRightElement w={'3rem'}>
          <Button onClick={handleSearch} width={'100%'} rounded={'3xl'}>
            <SearchIcon />
          </Button>
        </InputRightElement>
      </InputGroup>
      <Box>
        {hasMovieResult ? <MovieResult movie={movie} /> : <Heading>You have not searched for a movie yet!</Heading>}
      </Box>
    </Box>
  );
};

export default MainPage;

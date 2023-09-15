import { Box, Button, Heading, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import MovieResult from '../Components/MovieResult';

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
    console.log(movie);
    if (movie === null) {
      setHasMovieResult(false);
    } else {
      setHasMovieResult(true);
    }
  };

  return (
    <Box w={'90%'} margin={'auto'} padding={'15px'} marginTop={'30px'}>
      <Input onChange={handleSearchInputChange} />
      <Button onClick={handleSearch}>Search</Button>
      <Box>
        {hasMovieResult ? <MovieResult movie={movie} /> : <Heading>You have not searched for a movie yet!</Heading>}
      </Box>
    </Box>
  );
};

export default MainPage;

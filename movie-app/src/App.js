import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=8f291007bd567fd528c5f008e35fa8f1&sort_by=popularity.desc&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=8f291007bd567fd528c5f008e35fa8f1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovieApi(FEATURED_API);
  }, []);

  const getMovieApi = (API) => {
    fetch(API).then((res) => res.json()).then((data) => {
      setMovies(data.results);
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (setSearchTerm) {
      getMovieApi(SEARCH_API + searchTerm);
      setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <h1>Movie Search App</h1>
        <form onSubmit={handleOnSubmit}>
          <input className="search" type="search" placeholder="Search.." value={searchTerm} onChange={handleOnChange} />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />
          )}
      </div>
    </>
  );
}

export default App;

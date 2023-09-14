import Poster from "../Components/Poster"
import TopMovies from "../Components/TopMovies"
import Footer from "../Components/Footer"
import { useState, useEffect } from "react"

const HomePage = ({handleMenu}) => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a651e6fc86c0c188ee35ef4e1d564d11';

  async function fetchSearchResults(title) {
    try {
      setIsLoading(true);
      const response = await fetch(`${url}&query=${title}`);
      const data = await response.json();

      // Filter results based on the search query
      const filteredResults = data.results.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
      setSearchResults(filteredResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (search.trim() !== '') {
      fetchSearchResults(search);
    } else {
      // Clear search results if the query is empty
      setSearchResults([]);
    }
  }, [search]);

  return (
    <div>
      <Poster handleMenu={handleMenu} search={search} handleChange={handleChange} />
      <TopMovies isLoading={isLoading} searchResults={searchResults} search={search} />
      <Footer />
    </div>
  )
}

export default HomePage
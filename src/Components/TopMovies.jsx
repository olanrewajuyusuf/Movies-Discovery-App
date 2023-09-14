import useFetch from "../Utility/useFetch"
import MovieCard from "./MovieCard"
import { IoIosArrowForward } from "react-icons/io"
 
import '../Styles/topMovies.css'


let uri = 'https://api.themoviedb.org/3/movie/popular?api_key=a651e6fc86c0c188ee35ef4e1d564d11';

const TopMovies = ({ isLoading, searchResults, search}) => {

  // Getting data from useFetch custom hook
  const { data: topMovies, loading, errorMessage } = useFetch(uri)

  // console.log(movies);
  // const topMovies = movies.results;

  return (
    <div className="movies-wrapper">
      <h2>Top 10 movies <span>See more <IoIosArrowForward /></span></h2>
      <div className="top-movies">
        {errorMessage && <h1>{ errorMessage }</h1> }
        {loading && <h1>Loading...</h1>}
        {topMovies && <MovieCard topMovies={topMovies} isLoading={isLoading} searchResults={searchResults} search={search}  />}
      </div>
    </div>
  )
}

export default TopMovies
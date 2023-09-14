import { Link } from "react-router-dom";
import { useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from '../Utility/localStorage';

const MovieCard = ({ topMovies, isLoading, searchResults, search }) => {
  
  // Initialize favorite status for each movie based on local storage
  const initialFavorites = topMovies.results.slice(0, 10).map(movie => ({
    id: movie.id,
    isFavorite: getFromLocalStorage('favoriteMovies')?.includes(movie.id) || false,
  }));

  const [favoriteMovies, setFavoriteMovies] = useState(initialFavorites);

  const toggleFavorite = (movieId) => {
    // Find the movie in the favoriteMovies array
    const updatedFavorites = favoriteMovies.map(movie => {
      if (movie.id === movieId) {
        // Toggle the isFavorite status
        const isFavorite = !movie.isFavorite;
        saveToLocalStorage('favoriteMovies', isFavorite ? [...getFromLocalStorage('favoriteMovies'), movieId] : getFromLocalStorage('favoriteMovies').filter(id => id !== movieId));
        return { ...movie, isFavorite };
      }
      return movie;
    });

    // Update the favoriteMovies state
    setFavoriteMovies(updatedFavorites);
  };

  return (
    <>
    { isLoading && <h1>Loading...</h1>}

    {/* ====== Rendering Using Ternary condition ====== */}
    {search.trim() === '' ? (
      
      // Rendering Top 10 movies
      topMovies.results.slice(0, 10).map((movie) => {

        // Creating a poster url with poster_path getting from the endpoint
        const posterPath = movie.poster_path;
        const baseUrl = "https://image.tmdb.org/t/p/";
        const size = "w300";
        const imageUrl = `${baseUrl}${size}${posterPath}`;

        return (
            <div data-testid='movie-card' key={movie.id}>
              <div data-testid='movie-poster'>
                <img src={imageUrl} alt={movie.title} />
              </div>
              <p data-testid='movie-release-date'>USA, {movie.release_date}</p>
              <Link to={`/movies/${movie.id}`} ><h3 data-testid='movie-title'>{movie.title}</h3></Link>

              {/* ===== Rest of the movie card content ===== */}
              <div className="rating">
                <span><img src="images/imdb.png" alt="imdb" />86.0 / 100</span>
                <span className="tomato"><img src="images/tomato.png" alt="Tomato" />97%</span>
              </div>
              <p>Action, Adventure, Drama</p>
              <img src="images/TMDB.svg" alt="TMDB Logo" className="icon tmdb" />
              <img
                style={{ backgroundColor: favoriteMovies.find(m => m.id === movie.id)?.isFavorite ? "red" : "#9CA3AF" }}
                src="images/Icon.svg"
                alt="Love Icon"
                className="icon love-icon"
                onClick={() => toggleFavorite(movie.id)}
              />
            </div>
        );
      })) : (
        // ====== Rendering Search result =======
        searchResults.map((movie) => {

          // Creating a poster url with poster_path getting from the endpoint
          const posterPath = movie.poster_path;
          const baseUrl = "https://image.tmdb.org/t/p/";
          const size = "w300";
          const imageUrl = `${baseUrl}${size}${posterPath}`;
  
          return (
              <div data-testid='movie-card' key={movie.id}>
                <div data-testid='movie-poster'>
                  <img src={imageUrl} alt={movie.title} />
                </div>
                <p data-testid='movie-release-date'>USA, {movie.release_date}</p>
                <Link to={`/movies/${movie.id}`} ><h3 data-testid='movie-title'>{movie.title}</h3></Link>

                {/* ===== Rest of the movie card content ===== */}
                <div className="rating">
                  <span><img src="images/imdb.png" alt="imdb" />86.0 / 100</span>
                  <span className="tomato"><img src="images/tomato.png" alt="Tomato" />97%</span>
                </div>
                <p>Action, Adventure, Drama</p>
                <img src="images/TMDB.svg" alt="TMDB Logo" className="icon tmdb" />
                <img
                  style={{ backgroundColor: favoriteMovies.find(m => m.id === movie.id)?.isFavorite ? "red" : "#9CA3AF" }}
                  src="images/Icon.svg"
                  alt="Love Icon"
                  className="icon love-icon"
                  onClick={() => toggleFavorite(movie.id)}
                />
              </div>
      )}))}
    </>
  );
};

export default MovieCard;
      

import { Link } from "react-router-dom";
import { useState } from "react";

const MovieCard = ({ topMovies, isLoading, searchResults, search }) => {
  const [favoriteMovies, setFavoriteMovies] = useState({});

  const toggleFavorite = (movieId) => {
    setFavoriteMovies((prev) => ({
      ...prev,
      [movieId]: !prev[movieId],
    }));
  }

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
                style={{ backgroundColor: favoriteMovies[movie.id] ? "red" : "#9CA3AF" }}
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
                  style={{ backgroundColor: favoriteMovies[movie.id] ? "red" : "#9CA3AF" }}
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
      

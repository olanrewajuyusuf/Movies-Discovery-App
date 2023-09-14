import HomePage from "./Pages/HomePage";
import MovieDetails from "./Pages/MovieDetails";
import { Routes, Route } from "react-router-dom";

// let uri = 'https://api.themoviedb.org/3/movie/popular?api_key=a651e6fc86c0c188ee35ef4e1d564d11';

function App() {
  // const [movies, setMovies] = useState([])
  // const [error, setError] = useState(false)

  // const getTopMovies = async () => {

  //   const res = await fetch(uri);
  //   const movies = await res.json();

  //   const topMovies = movies.results;
    // let a = topMovies.map(x => x.id)
    // console.log(a);
    // console.log(movies);
    // const posterPath = movies.poster_path
    // const baseUrl = "https://image.tmdb.org/t/p/";
    // const size = "w185";

    // const imageUrl = `${baseUrl}${size}${posterPath}`;
    // console.log(posterPath);
  // }

  

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;

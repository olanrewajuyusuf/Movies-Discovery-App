import '../Styles/movieDetailMain.css'
import MovieDetailsMain from "../Components/MovieDetailsMain"
import SideNavBar from "../Components/SideNavBar"


const MovieDetails = ({menu}) => {
  return (
    <main>
        <SideNavBar />
        <MovieDetailsMain menu={menu} />
    </main>
  )
}

export default MovieDetails
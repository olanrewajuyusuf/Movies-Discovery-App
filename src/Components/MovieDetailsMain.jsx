import '../Styles/movieDetailMain.css';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import useFetch from '../Utility/useFetch';


const MovieDetailsMain = () => {
    // =====Getting the id of the movie=====
    const { id } = useParams();
    let uri = `https://api.themoviedb.org/3/movie/${id}?api_key=a651e6fc86c0c188ee35ef4e1d564d11`;

    // Fetching the movie details with useFetch custom hook
    const { data: details, errorMessage, loading } = useFetch(uri)
    

  return (
    <div className="movie-details">

        {/* Checking for the movie details by loading then throw error if it fails */}
        { loading && <h1>Loading...</h1> }
        { errorMessage && <h1>{ errorMessage }</h1> }
        { details && (
        <div className="movie-image">
            <img src="/images/Group 56.png" alt="poster" className='poster detail-poster'/>
            
            <div className="details-wrapper">
                 
                <span className='details'>
                    <span data-testid='movie-title' >{details.title}</span>
                    <div className='dot'></div>
                    <span>
                      <span data-testid='movie-release-date' >{details.release_date}</span>
                      <div className='dot'></div>
                      <span data-testid='movie-release-date' >PG-13</span>
                      <div className='dot'></div>
                      <span data-testid='movie-runtime' >{details.runtime}</span>
                    </span>
                    
                    <div className='btn'>
                        <button>Action</button>
                        <button>Drama</button>
                    </div>
                </span>
                <div className="rating">
                   <FaStar style={{color: "yellow"}}/>
                   <span>8.5</span>
                   | 350k
                </div>
            </div>
            <div className="overview">
                <section>
                    <p data-testid='movie-overview' >{details.overview}</p>
                    <p>Director: <span>Joseph Kosinki</span></p>
                    <p>Writers: <span>Jim Cash, Jack Epps Jr, Peter Craig</span></p>
                    <p>Stars: <span>Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
                    <div className="btn">
                        <div>
                          <span>Top rated movie #65</span>
                          <span>Awards 9 nominations</span>
                        </div>
                        <MdKeyboardArrowDown className='arrow'/>
                    </div>
                </section>
                <section>
                    <button><img src="/images/Two Tickets.png" alt="Tickets" />See Showtimes</button>
                    <button><img src="/images/List.png" alt="Tickets" />More watch options</button>
                    <img src="/images/Group 52.png" alt="poster" className='poster' />
                </section>
            </div> 
        </div> )}
    </div>
  )
}

export default MovieDetailsMain
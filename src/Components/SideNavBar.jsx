import '../Styles/sideNavBar.css'
import { Link } from 'react-router-dom'

const SideNavBar = () => {
  return (
    <div className="sidebar">
        <Link to='/'>
          <img src="/images/logo (3).png" alt="Logo-2" className='logo-2' />
        </Link>
        <ul className='navbar'>
            <li><img src="/images/Home.png" alt="Home" /><span>Home</span></li>
            <li className='active'><img src="/images/Movie Projector.png" alt="Projector" /><span>Movies</span></li>
            <li><img src="/images/TV Show.png" alt="Tv" /><span>TV Series</span></li>
            <li><img src="/images/Calendar.png" alt="Calendar" /><span>Upcoming</span></li>
        </ul>
        <div className="ticket">
            <small>Play movie quizes and earn free tickets<br /><span>50k people are playing now</span></small>
            <button>Start playing</button>
        </div>
        <ul>
            <li><img src="/images/Logout.png" alt="Logout" />Log out</li>
        </ul>
    </div>
  )
}

export default SideNavBar
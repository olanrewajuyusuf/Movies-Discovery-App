import '../Styles/poster.css'
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import SearchBar from './SearchBar'


const Poster = ({handleMenu, search, handleChange}) => {

  return (
    <div className="poster">
      <img src="images/Poster.png" alt="Poster" className='poster-img' />
      <nav>
        <img src="images/logo.png" alt="Logo" className='logo' />
        <SearchBar search={search} handleChange={handleChange} />
        <div className="menu-box">
          <strong>Sign in</strong>
          <div className="menu-icon" onClick={handleMenu}><HiOutlineMenuAlt4 /></div>
        </div>
      </nav>
      <div className="content-box">
        <div className="content">
          <h1>John Wick 3 :<br/>Parabellum</h1>
          <div className="rating">
            <span><img src="images/imdb.png" alt="imdb" />86.0 / 100</span>
            <span><img src="images/tomato.png" alt="Tomato" />97%</span>
          </div>
          <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
          <button><img src="images/Icon.png" alt="#" />WATCH TRAILER</button>
        </div>

        <section className='pagination-box'>
          <ul>
            <li><div></div>1</li>
            <li><div></div>2</li>
            <li className='active'><div></div>3</li>
            <li><div></div>4</li>
            <li><div></div>5</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Poster
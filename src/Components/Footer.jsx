import '../Styles/footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="social-icon">
            <img src="images/i-fb.png" alt="facebook" />
            <img src="images/i-instagram.png" alt="instagram" />
            <img src="images/i-twitter.png" alt="twitter" />
            <img src="images/i-youtube.png" alt="youtube" />
        </div>
        <div className="links">
            <p>Conditions of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div>
        <span>&copy; 2021 MovieBox by Adriana Eka Prayudha</span>
        <img src="images/TMDB.svg" alt="TMDB Logo" className='tmdb-logo'/>
    </footer>
  )
}

export default Footer
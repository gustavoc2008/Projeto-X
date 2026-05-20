import "./Header.css"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <h1>PROJECT X JULIO</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/countdown">Countdown</Link>
        <Link to="/playlist">Playlist</Link>
        <Link to="/galeria">Galeria</Link>
        <Link to="/regras">Regras</Link>
        <Link to="/rsvp">RSVP</Link>
      </nav>
    </header>
  )
}

export default Header
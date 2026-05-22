import "./Header.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Header() {

  const [usuario, setUsuario] = useState(null)

  useEffect(() => {

    const usuarioSalvo = localStorage.getItem("usuarioFesta")

    if (usuarioSalvo) {
      setUsuario(JSON.parse(usuarioSalvo))
    }

  }, [])

  return (
    <header className="header">

      <div className="logo-area">

        <h1>PROJECT X JULIO</h1>

        {/* usuário logado */}
        {usuario && (
          <div className="header-user">

            <div className="profile-avatar">
              {usuario.nome.charAt(0)}
            </div>

            <span>{usuario.nome}</span>

          </div>
        )}

      </div>

      <nav>

        <Link to="/">Home</Link>

        {/* só aparece logado */}
        {usuario && (
          <>
            <Link to="/sobre">Sobre</Link>
            <Link to="/convidados">Convidados</Link>
            <Link to="/mensagens">Mensagens</Link>
            <Link to="/playlist">Playlist</Link>
            <Link to="/galeria">Galeria</Link>
            <Link to="/regras">Regras</Link>
          </>
        )}

        <Link to="/countdown">Countdown</Link>

        {/* só aparece deslogado */}
        {!usuario && (
          <>
            <Link to="/rsvp">Cadastro</Link>
            <Link to="/login">Login</Link>
          </>
        )}

      </nav>

    </header>
  )
}

export default Header
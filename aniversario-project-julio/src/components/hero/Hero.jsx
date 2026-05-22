import "../hero/Hero.css"
import { useEffect, useState } from "react"

function Hero() {

  const [usuario, setUsuario] = useState(null)

  useEffect(() => {

    const usuarioSalvo = localStorage.getItem("usuarioFesta")

    if (usuarioSalvo) {
      setUsuario(JSON.parse(usuarioSalvo))
    }

  }, [])

  // logout
  function sairDaConta() {

    localStorage.removeItem("usuarioFesta")

    alert("Você saiu da conta")

    window.location.reload()
  }

  // login
  async function fazerLogin() {

    const nome = prompt("Digite seu nome")

    if (!nome) return

    try {

      const resposta = await fetch(
        `http://localhost:3000/convidados?nome=${nome}`
      )

      const dados = await resposta.json()

      if (dados.length > 0) {

        localStorage.setItem(
          "usuarioFesta",
          JSON.stringify(dados[0])
        )

        alert("Login realizado 🔥")

        window.location.reload()

      } else {

        alert("Conta não encontrada")

      }

    } catch (error) {

      console.log(error)

    }
  }

  return (
    <section className="hero">

      <div className="overlay">

        <h1>A FESTA MAIS INSANA DO ANO.</h1>

        <p>Sem regras. Sem limites.</p>

        <div className="buttons-area">

          {/* NÃO LOGADO */}
          {!usuario && (
            <>
              <button
                onClick={() => window.location.href = "/rsvp"}
              >
                CADASTRAR
              </button>

              <button
                onClick={() => window.location.href = "/login"}
              >
                LOGIN
              </button>
            </>
          )}

          {/* LOGADO */}
          {usuario && (
            <>
              <button
                onClick={() => window.location.href = "/playlist"}
              >
                ENTRAR NA FESTA
              </button>

              <button
                className="logout-btn"
                onClick={sairDaConta}
              >
                SAIR DA CONTA
              </button>
            </>
          )}

        </div>

      </div>

    </section>
  )
}

export default Hero
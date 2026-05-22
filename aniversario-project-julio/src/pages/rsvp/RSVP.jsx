import Header from "../../components/header/Header"
import { useState } from "react"

function RSVP() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [instagram, setInstagram] = useState("")

  async function confirmarPresenca(e) {

    e.preventDefault()

    if (!instagram.startsWith("@")) {
      alert("Digite um @ válido")
      return
    }

    const convidado = {
      nome,
      idade,
      instagram
    }

    try {

      const resposta = await fetch(
        "http://localhost:3000/convidados",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(convidado)
        }
      )

      if (resposta.status === 201) {

        localStorage.setItem(
          "usuarioFesta",
          JSON.stringify(convidado)
        )

        alert("Cadastro realizado 🔥")

        window.location.href = "/"

      }

    } catch (error) {

      console.log(error)

    }
  }

  return (
    <>
      <Header />

      <section className="page">

        <h1>Cadastro</h1>

        <div className="rsvp-container">

          <form
            className="rsvp-form"
            onSubmit={confirmarPresenca}
          >

            <h2>Confirmar Presença</h2>

            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <input
              type="number"
              placeholder="Sua idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />

            <input
              type="text"
              placeholder="@instagram"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />

            <button type="submit">
              Entrar na Lista
            </button>

          </form>

        </div>

      </section>
    </>
  )
}

export default RSVP
import Header from "../../components/header/Header"

function RSVP() {
  return (
    <>
      <Header />

      <section className="page">
        <h1>CONFIRMAR PRESENÇA</h1>

        <form className="rsvp-form">
          <input type="text" placeholder="Seu nome" />

          <input type="email" placeholder="Seu email" />

          <button>ENTRAR NA FESTA</button>
        </form>
      </section>
    </>
  )
}

export default RSVP
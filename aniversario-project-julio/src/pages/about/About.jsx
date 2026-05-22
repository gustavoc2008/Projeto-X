import Header from "../../components/header/Header"
import "../about/About.css"

function About() {
  return (
    <>
      <Header />

      <section className="page">
        <h1>SOBRE A FESTA</h1>
        
        <div className="image-container">
          <img
            src="src/assets/Captura de tela 2026-05-22 085124.png"
            alt="Festa do Julio"
          />
        </div>
        
        <div className="header_end">
          <h1>
            ENDEREÇO: Rua henrica grigolettorizo, 524 - Barcelona, Sao caetano do sul - SP
          </h1>
        </div>
        <br />

        <p>
          Prepare-se para uma noite de loucura, diversão e muita música boa.
        </p>

        <br />

        <ul>
          <li>📍 Mansão Maromba</li>
          <li>🍾 Open Bar of Dad of julio</li>
          <li>🎧 Comida pra todos, pras mulheres tem o Julinho</li>
          <li>🔥 Luzes neon toda hora</li>
        </ul>
      </section>
    </>
  )
}

export default About
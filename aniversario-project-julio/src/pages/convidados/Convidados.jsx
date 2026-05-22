import Header from "../../components/header/Header"
import { useEffect, useState } from "react"

function Convidados() {

    const [convidados, setConvidados] = useState([])

    useEffect(() => {

        buscarConvidados()

    }, [])

    async function buscarConvidados() {

        try {

            const resposta = await fetch(
                "http://localhost:3000/convidados"
            )

            const dados = await resposta.json()

            setConvidados(dados)

        } catch (error) {

            console.log(error)

        }
    }

    return (
        <>
            <Header />

            <section className="page">

                <h1>CONVIDADOS</h1>

                <div className="convidados-grid">

                    {convidados.map((convidado) => (

                        <div
                            key={convidado.id}
                            className="convidado-card"
                        >

                            <div className="convidado-avatar">
                                {convidado.nome.charAt(0)}
                            </div>

                            <h2>{convidado.nome}</h2>

                            <p>{convidado.instagram}</p>

                            <span>
                                {convidado.idade} anos
                            </span>

                        </div>

                    ))}

                </div>

            </section>
        </>
    )
}

export default Convidados
import Header from "../../components/header/Header"
import { useEffect, useState } from "react"

function Playlist() {

    const [musica, setMusica] = useState("")
    const [artista, setArtista] = useState("")

    const [lista, setLista] = useState([])

    useEffect(() => {

        buscarMusicas()

    }, [])

    async function buscarMusicas() {

        try {

            const resposta = await fetch(
                "http://localhost:3000/musicas"
            )

            const dados = await resposta.json()

            setLista(dados)

        } catch(error) {

            console.log(error)

        }
    }

    async function pedirMusica(e) {

        e.preventDefault()

        const novaMusica = {
            musica,
            artista
        }

        try {

            const resposta = await fetch(
                "http://localhost:3000/musicas",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(novaMusica)
                }
            )

            if(resposta.status === 201) {

                setMusica("")
                setArtista("")

                buscarMusicas()

            }

        } catch(error) {

            console.log(error)

        }
    }

    return (
        <>
            <Header />

            <section className="page">

                <h1>PLAYLIST</h1>

                <div className="playlist-form-area">

                    <form
                    className="playlist-form"
                    onSubmit={pedirMusica}
                    >

                        <input
                            type="text"
                            placeholder="Nome da música"
                            value={musica}
                            onChange={(e) => setMusica(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Nome do artista"
                            value={artista}
                            onChange={(e) => setArtista(e.target.value)}
                        />

                        <button type="submit">
                            Pedir Música
                        </button>

                    </form>

                </div>

                <div className="playlist-grid">

                    {lista.map((item) => (

                        <div
                        key={item.id}
                        className="playlist-card"
                        >

                            <h2>{item.musica}</h2>

                            <p>{item.artista}</p>

                        </div>

                    ))}

                </div>

            </section>
        </>
    )
}

export default Playlist
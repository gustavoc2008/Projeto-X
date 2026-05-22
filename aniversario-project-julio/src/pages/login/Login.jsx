import Header from "../../components/header/Header"
import { useState } from "react"

function Login() {

    const [nome, setNome] = useState("")
    const [instagram, setInstagram] = useState("")

    async function entrar(e) {

        e.preventDefault()

        try {

            const resposta = await fetch(
                `http://localhost:3000/convidados?nome=${nome}&instagram=${instagram}`
            )

            const dados = await resposta.json()

            // encontrou usuário
            if(dados.length > 0) {

                localStorage.setItem(
                    "usuarioFesta",
                    JSON.stringify(dados[0])
                )

                alert("Login realizado 🔥")

                window.location.href = "/"

            } else {

                alert("Nome ou @ incorretos")

            }

        } catch(error) {

            console.log(error)

            alert("Erro ao fazer login")

        }
    }

    return (
        <>
            <Header />

            <section className="page">

                <h1>LOGIN</h1>

                <div className="rsvp-container">

                    <form
                    className="rsvp-form"
                    onSubmit={entrar}
                    >

                        <h2>Entrar na Festa</h2>

                        <input
                            type="text"
                            placeholder="Seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="@instagram"
                            value={instagram}
                            onChange={(e) => setInstagram(e.target.value)}
                        />

                        <button type="submit">
                            Entrar
                        </button>

                    </form>

                </div>

            </section>
        </>
    )
}

export default Login
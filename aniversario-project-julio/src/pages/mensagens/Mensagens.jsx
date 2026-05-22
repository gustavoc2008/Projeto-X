import Header from "../../components/header/Header"
import "./Mensagens.css"
import { useEffect, useState } from "react"

function Mensagens() {

    const [posts, setPosts] = useState([])

    const [mensagem, setMensagem] = useState("")

    const [foto, setFoto] = useState("")

    useEffect(() => {

        buscarPosts()

    }, [])

    async function buscarPosts() {

        try {

            const resposta = await fetch(
                "http://localhost:3000/posts"
            )

            const dados = await resposta.json()

            setPosts(dados.reverse())

        } catch (error) {

            console.log(error)

        }
    }

    async function publicarPost(e) {

        e.preventDefault()

        const usuario = JSON.parse(
            localStorage.getItem("usuarioFesta")
        )

        if (!mensagem.trim()) {

            alert("Digite uma mensagem.")

            return
        }

        const novoPost = {
            nome: usuario.nome,
            mensagem: mensagem.trim(),
            foto: foto || "",
            curtidas: 0,
            curtidoPor: []
        }

        try {

            const resposta = await fetch(
                "http://localhost:3000/posts",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(novoPost)
                }
            )

            if (resposta.ok) {

                setMensagem("")
                setFoto("")

                buscarPosts()

            } else {

                alert("Erro ao publicar.")

            }

        } catch (error) {

            console.log(error)

        }
    }

    // CURTIR
    async function curtirPost(post) {

        const usuario = JSON.parse(
            localStorage.getItem("usuarioFesta")
        )

        // já curtiu
        if (
            post.curtidoPor &&
            post.curtidoPor.includes(usuario.nome)
        ) {

            alert("Você já curtiu esse post 🔥")

            return
        }

        try {

            await fetch(
                `http://localhost:3000/posts/${post.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({

                        curtidas: post.curtidas + 1,

                        curtidoPor: [
                            ...(post.curtidoPor || []),
                            usuario.nome
                        ]

                    })
                }
            )

            buscarPosts()

        } catch (error) {

            console.log(error)

        }
    }

    function adicionarFoto(e) {

        const arquivo = e.target.files[0]

        if (!arquivo) return

        const imagemURL = URL.createObjectURL(arquivo)

        setFoto(imagemURL)
    }

    return (
        <>
            <Header />

            <section className="page">

                <h1>MENSAGENS DA FESTA</h1>

                <form
                    className="post-form"
                    onSubmit={publicarPost}
                >

                    <textarea
                        placeholder="O que está acontecendo na festa? 🔥"
                        value={mensagem}
                        onChange={(e) =>
                            setMensagem(e.target.value)
                        }
                    />

                    {/* BOTÃO FOTO */}
                    <label className="upload-btn">

                        📸 Adicionar Foto

                        <input
                            type="file"
                            accept="image/*"
                            onChange={adicionarFoto}
                            hidden
                        />

                    </label>

                    {/* preview */}
                    {foto && (
                        <img
                            src={foto}
                            alt="preview"
                            className="preview-image"
                        />
                    )}

                    <button
                        type="submit"
                        className="publicar-btn"
                    >
                        PUBLICAR
                    </button>

                </form>

                <div className="posts-grid">

                    {posts.map((post) => (

                        <div
                            key={post.id}
                            className="post-card"
                        >

                            <div className="post-header">

                                <div className="convidado-avatar">
                                    {post.nome.charAt(0)}
                                </div>

                                <h2>{post.nome}</h2>

                            </div>

                            <p className="post-message">
                                {post.mensagem}
                            </p>

                            {post.foto && (
                                <img
                                    src={post.foto}
                                    alt="foto festa"
                                    className="post-image"
                                />
                            )}

                            <div className="post-actions">

                                <button
                                    onClick={() =>
                                        curtirPost(post)
                                    }
                                >
                                    ❤️ {post.curtidas}
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </section>
        </>
    )
}

export default Mensagens
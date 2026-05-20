const targetDate = new Date("2026-12-31T23:59:59")

function updateCountdown() {

    const now = new Date()

    const diff = targetDate - now

    const days =
        Math.floor(diff / (1000 * 60 * 60 * 24))

    const hours =
        Math.floor((diff / (1000 * 60 * 60)) % 24)

    const minutes =
        Math.floor((diff / 1000 / 60) % 60)

    const seconds =
        Math.floor((diff / 1000) % 60)

    document.getElementById("days").innerText = days
    document.getElementById("hours").innerText = hours
    document.getElementById("minutes").innerText = minutes
    document.getElementById("seconds").innerText = seconds

}

setInterval(updateCountdown, 1000)

updateCountdown()

function postar() {

    const text =
        document.getElementById("text")

    const feed =
        document.getElementById("feed")

    if (text.value.trim() === "") {
        return
    }

    const post =
        document.createElement("div")

    post.classList.add("post")

    const hour =
        new Date().toLocaleTimeString()

    post.innerHTML = `
  
    <h3>🔥 Relato da Festa</h3>

    <p>${text.value}</p>

    <small>${hour}</small>
  
  `

    feed.prepend(post)

    text.value = ""

}

function trocarModo() {

    document.body.style.background =
        `hsl(${Math.random() * 360}, 60%, 6%)`

}

const canvas =
    document.getElementById("bg")

const ctx =
    canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

for (let i = 0; i < 120; i++) {

    particles.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        radius: Math.random() * 3,

        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2

    })

}

function animate() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    )

    particles.forEach(p => {

        ctx.beginPath()

        ctx.arc(
            p.x,
            p.y,
            p.radius,
            0,
            Math.PI * 2
        )

        ctx.fillStyle = "#ff00c8"

        ctx.fill()

        p.x += p.dx
        p.y += p.dy

        if (p.x < 0 || p.x > canvas.width) {
            p.dx *= -1
        }

        if (p.y < 0 || p.y > canvas.height) {
            p.dy *= -1
        }

    })

    requestAnimationFrame(animate)

}

animate()
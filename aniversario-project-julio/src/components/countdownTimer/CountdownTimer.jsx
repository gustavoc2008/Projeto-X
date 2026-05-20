import { useEffect, useState } from "react"

function CountdownTimer() {
  const targetDate = new Date("Dec 31, 2025 23:59:59").getTime()

  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60)
  const seconds = Math.floor((timeLeft / 1000) % 60)

  return (
    <div className="countdown">
      <h2>
        {days}d {hours}h {minutes}m {seconds}s
      </h2>
    </div>
  )
}

export default CountdownTimer
import { useEffect, useState } from "react"

function CountdownTimer() {
  // 06 de Julho de 2026 às 00:00
  const targetDate = new Date("July 06, 2026 00:00:00").getTime()

  const [timeLeft, setTimeLeft] = useState(
    targetDate - new Date().getTime()
  )

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = targetDate - new Date().getTime()

      // impede números negativos
      if (difference <= 0) {
        clearInterval(timer)
        setTimeLeft(0)
      } else {
        setTimeLeft(difference)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (timeLeft / (1000 * 60 * 60)) % 24
  )
  const minutes = Math.floor(
    (timeLeft / (1000 * 60)) % 60
  )
  const seconds = Math.floor(
    (timeLeft / 1000) % 60
  )

  return (
    <div className="countdown">
      <h2>
        {days}d {hours}h {minutes}m {seconds}s
      </h2>
    </div>
  )
}

export default CountdownTimer
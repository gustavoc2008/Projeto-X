import Header from "../../components/header/Header"
import CountdownTimer from "../../components/countdownTimer/CountdownTimer"

function Countdown() {
  return (
    <>
      <Header />

      <section className="page">
        <h1>COUNTDOWN</h1>

        <CountdownTimer />
      </section>
    </>
  )
}

export default Countdown
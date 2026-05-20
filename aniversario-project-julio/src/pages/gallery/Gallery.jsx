import Header from "../../components/header/Header"

function Gallery() {
  return (
    <>
      <Header />

      <section className="page">
        <h1>GALERIA</h1>

        <div className="gallery">
          <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f" />
          <img src="https://images.unsplash.com/photo-1506157786151-b8491531f063" />
          <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819" />
        </div>
      </section>
    </>
  )
}

export default Gallery
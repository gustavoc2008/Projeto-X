import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Countdown from "../pages/countdown/Countdown"
import Playlist from "../pages/playlist/Playlist"
import Gallery from "../pages/gallery/Gallery"
import Rules from "../pages/rules/Rules"
import RSVP from "../pages/rsvp/RSVP"
import NotFound from "../pages/notFound/NotFound"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/regras" element={<Rules />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
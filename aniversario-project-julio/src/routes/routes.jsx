import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Countdown from "../pages/countdown/Countdown"
import Playlist from "../pages/playlist/Playlist"
import Gallery from "../pages/gallery/Gallery"
import Rules from "../pages/rules/Rules"
import RSVP from "../pages/rsvp/RSVP"
import Login from "../pages/login/Login"
import NotFound from "../pages/notFound/NotFound"
import Convidados from "../pages/convidados/Convidados"
import Mensagens from "../pages/mensagens/Mensagens"

import PrivateRoute from "./PrivateRoutes"

function AppRoutes() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/sobre"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />

        <Route
          path="/convidados"
          element={
            <PrivateRoute>
              <Convidados />
            </PrivateRoute>
          }
        />

        <Route
          path="/playlist"
          element={
            <PrivateRoute>
              <Playlist />
            </PrivateRoute>
          }
        />

        <Route
          path="/galeria"
          element={
            <PrivateRoute>
              <Gallery />
            </PrivateRoute>
          }
        />

        <Route
          path="/regras"
          element={
            <PrivateRoute>
              <Rules />
            </PrivateRoute>
          }
        />

        <Route
          path="/mensagens"
          element={
            <PrivateRoute>
              <Mensagens />
            </PrivateRoute>
          }
        />

        <Route path="/countdown" element={<Countdown />} />

        <Route path="/rsvp" element={<RSVP />} />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes
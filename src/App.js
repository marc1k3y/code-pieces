import "./App.css"
import { Routes, Route } from "react-router-dom"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { useState } from "react"
import { privateRoutes, publicRoutes } from "./routes"

function App() {
  const [isAuth, setIsAuth] = useState(true)
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Routes>
          {isAuth
            ? privateRoutes.map((route) =>
              <Route key={route.path} path={route.path} element={route.element} />)
            : publicRoutes.map((route) =>
              <Route key={route.path} path={route.path} element={route.element} />)}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
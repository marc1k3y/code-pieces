import "./App.css"
import { Footer } from "./components/footer"
import { Header } from "./components/header"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <div style={{ fontSize: "40px", color: "rgb(95, 160, 225)" }}>КАНТЕНТ</div>
      </div>
      <Footer />
    </div>
  )
}

export default App
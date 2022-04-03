import "./App.css"
import { Footer } from "./components/footer"
import { Header } from "./components/header"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content"></div>
      <Footer />
    </div>
  )
}

export default App
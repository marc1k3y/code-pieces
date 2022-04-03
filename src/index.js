import { createRoot } from "react-dom/client"
import App from "./App"
import { HashRouter } from "react-router-dom"
import "./fonts/gFont.ttf"

const root = createRoot(document.getElementById("root"))
root.render(<HashRouter><App /></HashRouter>)
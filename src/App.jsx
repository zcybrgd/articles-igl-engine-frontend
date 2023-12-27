import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Router user={true} userRole={"client"} />
    </BrowserRouter>
  )
}


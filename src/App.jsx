import Aside from "./components/Aside.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx"
import "./css/main.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
     <>
      <Aside />
      <ItemListContainer />
     </>
)
    
}

export default App

import {BrowserRouter, Routes, Route} from "react-router-dom"
import BasicExample from "./Componentes/BasicExample";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Administradores from "./pages/Administradores";
import './App.css'

function App(){
  
  return(
  
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="Sobre" element={<Sobre/>}></Route>
        <Route path="Contato" element={<Contato/>}></Route>
        <Route path="Administradores" element={<Administradores/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
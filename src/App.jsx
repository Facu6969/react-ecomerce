import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aside from './components/Aside.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrito from "./components/Carrito.jsx"
import NotFound from './components/NotFound.jsx';
import './css/main.css';



function App() {
  const [num, setNum] = useState(2);
  return (
    <BrowserRouter>
      <div className="container">
        <Aside num={num}/>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ItemListContainer titulo="Productos" />} />
            <Route path="/categorias/:id" element={<ItemListContainer titulo="Productos Filtrados" />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

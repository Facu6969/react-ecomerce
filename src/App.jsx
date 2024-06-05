import React from 'react';
import Aside from './components/Aside.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer';
import './css/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Aside />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ItemListContainer titulo="Productos" />} />
            <Route path="/categorias/:id" element={<ItemListContainer titulo="Productos Filtrados" />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

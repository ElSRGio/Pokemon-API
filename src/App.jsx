import React from 'react';
import './App.css';
import { NavBar } from './components/common/NavBar';
import { Footer } from './components/common/Footer';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="app-container">
      {/* 1. Barra de Navegación Superior */}
      <NavBar/>

      {/* 2. Contenedor Principal */}
      <Home/>

      {/* 3. FOOTER (Nuevo) */}
      <Footer/>

    </div>
  );
}

export default App;
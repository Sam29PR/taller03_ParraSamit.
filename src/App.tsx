import React from 'react';
import logo from './assets/logoReact.png'; 
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>¡¡¡Hola Mundo!!!</h1>
        <p>Este es mi primer proyecto en React .</p>
      </header>
    </div>
  );
}

export default App;

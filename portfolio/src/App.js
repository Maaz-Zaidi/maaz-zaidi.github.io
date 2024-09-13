import React from 'react';
import './App.css';  // Global CSS (if needed)
import Home from './Components/Home/Home'; // Import your Home component
import WaveAnimation from './Components/Visuals/WaveAnimation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home /> 
      </header>
    </div>
  );
}

export default App;

// src/App.js
import React from 'react';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <header className="bg-gray-800 p-4">
        <h1 className="text-white text-3xl">Restaurant Menu</h1>
      </header>
      <main className="p-4">
        <Menu />
      </main>
    </div>
  );
}

export default App;

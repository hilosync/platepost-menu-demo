// src/App.js
import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <main className="p-4">
      <Header />
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;

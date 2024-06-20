import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import './App.css';

function App() {
  return (
    <Router>
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1 className="text-3xl">News Website</h1>
      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:title" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

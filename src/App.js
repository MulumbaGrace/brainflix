import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';

  function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/videos/:id" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;


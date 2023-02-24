import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import DetailsPage from './Components/DetailsPage';
import NotFoundCountry from './Components/NotFoundCountry';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:alpha2Code" element={<DetailsPage />} />
        <Route path="*" element={<NotFoundCountry />} />
      </Routes>
    </div>

  );
}

export default App;

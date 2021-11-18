import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';

function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Main Page</p>
        <a className="App-link" href="/claims">to Claims Page</a>
      </header>
    </div>
  );
}

function ClaimsPage() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Claims Page</p>
        <a className="App-link" href="/">to Main Page</a>
      </header>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/claims" element={<ClaimsPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

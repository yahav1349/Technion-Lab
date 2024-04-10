import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageOne from './pageOne';
import PageTwo from './pageTwo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
        <Route exact path='/' element={<PageOne/>} />
        <Route path='/pageTwo' element={<PageTwo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
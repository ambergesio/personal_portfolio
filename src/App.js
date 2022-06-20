import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Header from './components/header';
import Main from './components/Main';

import './styles/index.scss';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;

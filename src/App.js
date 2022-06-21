import React from 'react';

import Header from './components/header';
import Main from './components/Main';

import Contact from './components/contact';
import Footer from './components/footer';

import './styles/index.scss';


const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

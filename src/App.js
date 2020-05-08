import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
  );
}

export default App;
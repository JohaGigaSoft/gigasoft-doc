import React from 'react';
import './App.css';
import DocNav from './components/Navbar';
import { useRoutes } from 'react-router-dom';
import { routes } from './router';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {
  let element = useRoutes(routes);
  return (
    <Wrapper>
      <DocNav />
      <div className="cls">{element}</div>
      <Footer />
    </Wrapper>
  );
}

export default App;

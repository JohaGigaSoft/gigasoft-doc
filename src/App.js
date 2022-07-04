import React from 'react';
import './App.css';
import DocNav from './layouts/Navbar';
import { useRoutes } from 'react-router-dom';
import { routes } from './router';
import Footer from './components/Footer';
import Wrapper from './layouts/Wrapper';

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

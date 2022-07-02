import React from 'react';
import './App.css';
import DocNav from './components/Navbar';
import { useRoutes } from 'react-router-dom';
import { routes } from './router';
import Footer from './components/Footer';

function App() {
  let element = useRoutes(routes);
  return (
    <>
      <DocNav />
      <div className="cls">{element}</div>
      <Footer />
    </>
  );
}

export default App;

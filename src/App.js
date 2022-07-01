import React from 'react';
import './App.css';
import DocNav from './components/Navbar';
import { useRoutes } from 'react-router-dom';
import Page from './components/Page';

export const routes = [
  {
    path: '/',
    element: <Page title="Home" />,
  },
  { path: '/doc-giga-food', element: <Page title="Giga food" /> },
  { path: '/doc-rest-food', element: <Page title="Rest food" /> },
  { path: '/doc-go-food', element: <Page title="Go food" /> },
  { path: '/doc-hexacom', element: <Page title="Hexa com" /> },
  { path: '/doc-giga-mart', element: <Page title="Giga mart" /> },
  { path: '/doc-g-cash', element: <Page title="G-cash" /> },
];

function App() {
  let element = useRoutes(routes);
  return (
    <>
      <DocNav />
      <div className="cls">{element}</div>
    </>
  );
}

export default App;

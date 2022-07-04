import Details from './components/Details';
import Home from './components/Home';
import Page from './layouts/Page';
import RestFoodIntro from './components/RestFoodIntro';
import SecondPage from './components/SecondPage';
import GigaMartIntro from './components/GigaMartIntro';

// Data
import { restFood } from './data/restFood';
import { gigaMart } from './data/gigaMart';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'doc-giga-food',
    element: <SecondPage title="Giga Food" />,
  },
  {
    path: 'doc-rest-food',
    element: <Page accordions={restFood} />,
    children: [
      {
        index: true,
        element: <RestFoodIntro />,
      },
      {
        path: ':docGigaFood',
        element: <Details />,
      },
    ],
  },
  {
    path: 'doc-go-food',
    element: <SecondPage title="Go Food" />,
  },
  {
    path: 'doc-hexacom',
    element: <SecondPage title="Hexacom" />,
  },
  {
    path: 'doc-giga-mart',
    element: <Page accordions={gigaMart} />,
    children: [
      {
        index: true,
        element: <GigaMartIntro />,
      },
      {
        path: ':docGigaFood',
        element: <Details />,
      },
    ],
  },
  {
    path: 'doc-g-cash',
    element: <SecondPage title="G-cash" />,
  },
];

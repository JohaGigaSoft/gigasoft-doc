import Home from './components/Home';
import Page from './layouts/Page';
import GoMartIntro from './pages/goMart/GoMartIntro';
import GigaMartIntro from './pages/gigaMart/GigaMartIntro';
import RestFoodIntro from './pages/restFood/RestFoodIntro';
import RestFoodDetails from './layouts/RestFoodDetails';
import GoMartDetails from './layouts/GoMartDetails';
import GigaMartDetails from './layouts/GigaMartDetails';

// Data
import { restFood } from './data/restFood';
import { goMart } from './data/goMart';
import { gigaMart } from './data/gigaMart';

export const routes = [
  {
    path: '/',
    element: <Home />,
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
        element: <RestFoodDetails />,
      },
    ],
  },
  {
    path: 'doc-go-mart',
    element: <Page accordions={goMart} />,
    children: [
      {
        index: true,
        element: <GoMartIntro />,
      },
      {
        path: ':docGigaFood',
        element: <GoMartDetails />,
      },
    ],
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
        element: <GigaMartDetails />,
      },
    ],
  },
];

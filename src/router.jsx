import Details from './components/Details';
import Page from './components/Page';
import RestFoodIntro from './components/RestFoodIntro';

// Data
import { goFood } from './data/goFood';

export const routes = [
  {
    path: '/',
    element: <p>Home</p>,
  },
  {
    path: '/doc-giga-food',
    element: <p>Go food</p>,
  },
  {
    path: '/doc-rest-food',
    element: <Page accordions={goFood} />,
    children: [
      {
        path: 'introduction',
        element: <RestFoodIntro />,
      },
      {
        path: ':docGigaFood',
        element: <Details />,
      },
    ],
  },
  { path: '/doc-go-food', element: <p>Go food</p> },
  { path: '/doc-hexacom', element: <p>Hexa com</p> },
  { path: '/doc-giga-mart', element: <p>Giga mart</p> },
  { path: '/doc-g-cash', element: <p>G-cash</p> },
];

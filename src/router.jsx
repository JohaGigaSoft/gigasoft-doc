import Details from './components/Details';
import Page from './components/Page';
import RestFoodIntro from './components/RestFoodIntro';
import SecondPage from './components/SecondPage';

// Data
import { goFood } from './data/goFood';

export const routes = [
  {
    path: '/',
    element: <SecondPage title="Home" />,
  },
  {
    path: 'doc-giga-food',
    element: <SecondPage title="Giga Food" />,
  },
  {
    path: 'doc-rest-food',
    element: <Page accordions={goFood} />,
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
    element: <SecondPage title="Giga mart" />,
  },
  {
    path: 'doc-g-cash',
    element: <SecondPage title="G-cash" />,
  },
];

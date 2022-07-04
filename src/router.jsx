import Details from './components/Details';
import Home from './components/Home';
import Page from './layouts/Page';
import RestFoodIntro from './components/RestFoodIntro';
import GoMartIntro from './components/GoMartIntro';

// Data
import { restFood } from './data/restFood';
import { goMart } from './data/goMart';
import Introduction from './components/Introduction';

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
        element: <Details />,
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
        element: <Details />,
      },
    ],
  },
  {
    path: 'doc-demo-1',
    element: <Page accordions={goMart} />,
    children: [
      {
        index: true,
        element: <Introduction title="Demo 1" />,
      },
      {
        path: ':docGigaFood',
        element: <Details />,
      },
    ],
  },
  {
    path: 'doc-demo-2',
    element: <Page accordions={goMart} />,
    children: [
      {
        index: true,
        element: <Introduction title="Demo 2" />,
      },
      {
        path: ':docGigaFood',
        element: <Details />,
      },
    ],
  },

  {
    path: 'doc-demo-3',
    element: <Page accordions={goMart} />,
    children: [
      {
        index: true,
        element: <Introduction title="Demo 3" />,
      },
      {
        path: ':docGigaFood',
        element: <Details />,
      },
    ],
  },
  {
    path: 'doc-demo-4',
    element: <Page accordions={goMart} />,
    children: [
      {
        index: true,
        element: <Introduction title="Demo 4" />,
      },
      {
        path: ':docGigaFood',
        element: <Details />,
      },
    ],
  },
];

// This file contains the routes for the application. It is used to define the routes for the application and the components that should be rendered for each route.
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Register from "./components/Registration"; // Corrected import statement

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/registration', // Path for the registration page
    element: <Register /> // Element to render for this path
  }
];

export default AppRoutes;

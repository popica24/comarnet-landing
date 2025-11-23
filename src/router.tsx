import { createBrowserRouter } from "react-router";
import Layout from "./layout";
import Homepage from "./pages/homepage";
import Services from "./pages/services";
import Distribution from "./pages/distribution";
import Logistic from "./pages/logistic/";
import Storage from "./pages/storage/";
import PallEx from "./pages/pallex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/servicii",
        element: <Services />,
      },
      {
        path: "/servicii/distributie",
        element: <Distribution />,
      },
      {
        path: "/servicii/logistica",
        element: <Logistic />,
      },
      {
        path: "/servicii/depozitare",
        element: <Storage />,
      },
      {
        path: "/pallex",
        element: <PallEx />,
      },
    ],
  },
]);

export default router;

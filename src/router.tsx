import { createBrowserRouter } from "react-router";
import Layout from "./layout";
import Homepage from "./pages/homepage";
import Services from "./pages/services";
import Distribution from "./pages/distribution";
import Logistic from "./pages/logistic/";
import Storage from "./pages/storage/";
import PallEx from "./pages/pallex";
import Sustainability from "./pages/sustainability";
import Contact from "./pages/contact";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Cookies from "./pages/cookies";
import Anpc from "./pages/anpc";
import NotFound from "./pages/notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // Renders the branded 404 for thrown route errors too, instead of React
    // Router's default developer error screen.
    errorElement: <NotFound />,
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
      {
        path: "/sustenabilitate",
        element: <Sustainability />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/termeni",
        element: <Terms />,
      },
      {
        path: "/confidentialitate",
        element: <Privacy />,
      },
      {
        path: "/cookies",
        element: <Cookies />,
      },
      {
        path: "/anpc",
        element: <Anpc />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;

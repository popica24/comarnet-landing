import type { RouteObject } from "react-router";
import Layout from "./layout";
import Homepage from "./pages/homepage";
import Services from "./pages/services";
import Distribution from "./pages/distribution";
import Logistic from "./pages/logistic/";
import Storage from "./pages/storage/";
import PallEx from "./pages/pallex";
import Sustainability from "./pages/sustainability";
import NotFound from "./pages/not-found";

// Shared by the browser router (router.tsx) and the build-time prerender
// (entry-server.tsx). Each new page also needs an entry in src/seo/pages.ts.
const routes: RouteObject[] = [
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
      {
        path: "/sustenabilitate",
        element: <Sustainability />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;

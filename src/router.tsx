import { createBrowserRouter } from "react-router";
import Layout from "./layout";
import Homepage from "./pages/homepage";
import Services from "./pages/services";

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
    ],
  },
]);

export default router;

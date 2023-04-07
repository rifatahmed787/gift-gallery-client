import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Contact from "../pages/Contact/Contact";
import Product from "../pages/CategoryProduct/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
        loader: ({ params }) => fetch(`products.json/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

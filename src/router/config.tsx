
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Menu from "../pages/menu/page";
import CarHire from "../pages/car-hire/page";
import Lodge from "../pages/lodge/page";
import Gallery from "../pages/gallery/page";
import About from "../pages/about/page";
import Contact from "../pages/contact/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/car-hire",
    element: <CarHire />,
  },
  {
    path: "/lodge",
    element: <Lodge />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;

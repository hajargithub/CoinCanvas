import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Coins from "./pages/Coins";
import CoinsShow from "./pages/CoinsShow";
import ExchangeShow from "./pages/ExchangeShow";
import MasterPage from "./layouts/MasterPage";
import Exchanges from "./pages/Exchanges";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MasterPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "/coins",
    element: <MasterPage />,
    children: [
      { path: "", element: <Coins /> },
      { path: ":id", element: <CoinsShow /> },
    ],
  },
  {
    path: "/exchanges",
    element: <MasterPage />,
    children: [
      { path: "", element: <Exchanges /> },
      { path: ":id", element: <ExchangeShow /> },
    ],
  },
]);

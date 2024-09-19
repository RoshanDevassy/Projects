import { createBrowserRouter } from "react-router-dom";
import Hero from "../pages/hero";
import Signup from "../pages/signupform";
import Landingpage from "../pages/landingpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  { path: "/signuppage",
    element: <Signup />, },
  {
    path:"/landingpage",
    element:<Landingpage/>,
  }
]);

export { router };

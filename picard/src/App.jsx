import "./App.css";
import * as ReactDOM from "react-dom/client";
import SignUp from "./routes/sign-up";
import ForgotPassword from "./routes/forgot-password";
import LoginPage from "./routes/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LandingPage from "./routes/landing_page";
import Home from "./routes/home";
import Experiment from "./routes/Experiment";
import DataVisualization from "./routes/data_visualization";
import AccessPage from "./routes/access-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/access-page",
    element: <AccessPage />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/experiment",
    element: <Experiment />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/data-visualization",
    element: <DataVisualization />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

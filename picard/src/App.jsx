import "./App.css";
import * as ReactDOM from "react-dom/client";
import SignUp from "./sign-up";
import ForgotPassword from "./forgot-password";
import LoginPage from "./login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Experiment from "./routes/experiment";
import LandingPage from "./routes/landing_page";
import Home from "./pages/home";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import "./App.css";
import * as ReactDOM from "react-dom/client";
import SignUp from "./routes/sign-up";
import ForgotPassword from "./routes/forgot-password";
import LoginPage from "./routes/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Experiment from "./routes/experiment";
import LandingPage from "./routes/landing_page";
import Home from "./pages/home";
import DataVisualization from "./pages/data_visualization";

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
  {
    path: "/data-visualization",
    element: <DataVisualization />,
  },
]);
import AuthProvider from "./components/authprovider/authprovider";
import Home from "./pages/home";
import Routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
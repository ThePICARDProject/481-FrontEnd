import "./App.css";
import SignUp from "../src/routes/sign-up.jsx";
import ForgotPassword from "../src/routes/forgot-password.jsx";
import LoginPage from "../src/routes/loginPage.jsx";
import "./index.css";
import Experiment from "../src/routes/Experiment.jsx";
import LandingPage from "../src/routes/landing_page.jsx";
import Home from "../src/routes/home.jsx";
import ProtectedRoute from "../src/components/protectedroute/protectedroute.jsx";
import DataVisualization from "../src/routes/data_visualization.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../src/components/authprovider/authprovider";
import History from "./routes/history.jsx";

const Routes = () => {
  const { token } = useAuth();

  const notAuthedRoutes = [
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
  ];

  const authedRoutes = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/history",
          element: <History />,
        },
        {
          path: "/experiment",
          element: <Experiment />,
        },
        {
          path: "/visualization",
          element: <DataVisualization />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([
    ...(!token ? notAuthedRoutes : []),
    ...authedRoutes,
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;

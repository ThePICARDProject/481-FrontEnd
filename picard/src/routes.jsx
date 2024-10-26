import "./App.css";
import RequestAccountPage from "./routes/request-account.jsx";
import LoginPage from "./routes/loginPage.jsx";
import AuthPage from "./routes/user_auth.jsx";
import "./index.css";
import Experiment from "./routes/Experiment.jsx";
import LandingPage from "./routes/landing_page.jsx";
import Home from "./pages/home.jsx";
import ProtectedRoute from "./components/protectedroute/protectedroute.jsx";
import DataVisualization from "./routes/data_visualization.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./components/authprovider/authprovider.jsx";
import { Children } from "react";

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
      path: "/request-account",
      element: <RequestAccountPage />,
    },
    {
      path: "/authenticationPage",
      element: <AuthPage />,
    },
  ];

  const authedRoutes = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/home",
          element: <Home />,
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

import "./App.css";
import SignUp from "./routes/sign-up.jsx";
import LoginPage from "./loginPage.jsx";
import "./index.css";
import Experiment from "./routes/Experiment.jsx";
import LandingPage from "./routes/landing_page.jsx";
import Home from "./pages/home.jsx";
import ProtectedRoute from "./components/protectedroute/protectedroute.jsx"
import DataVisualization from "./routes/data_visualization.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth} from "./components/authprovider/authprovider.jsx";
import { Children } from "react";
 
const Routes = () => {
  const { token } = useAuth();

const notAuthedRoutes = [
  {
    path: "/",
    element: < LandingPage/>
  }, 
  {
  path: "/login",
  element: <LoginPage />,
},
{
  path: "/sign-up",
  element: <SignUp />,
}];

const authedRoutes = [
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: < Home />
      },
      {
        path: "/experiment",
        element: <Experiment />
      },
      {
        path: "/visualization",
        element: <DataVisualization />
      }
    ]
  }
];


const router = createBrowserRouter([
  ...(!token ? notAuthedRoutes : []),
  ...authedRoutes,
]);

  return <RouterProvider router={router}></RouterProvider>
}

export default Routes;

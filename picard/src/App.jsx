
import './App.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Experiment from './routes/experiment';
import LandingPage from './routes/landing_page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/login",
    element: <div>This will be the login page</div>
  },
  {
    path: "/sign-up",
    element: <div>This will be the sign up page</div>
  },{
    path: "/forgot-password",
    element: <div>This will be the forgot password page</div>
  },
  {
    path: "/experiment",
    element: <Experiment />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

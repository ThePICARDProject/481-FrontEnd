
import './App.css'
import * as ReactDOM from "react-dom/client";
import SignUp from "./sign-up";
import ForgotPassword from "./forgot-password";
import LoginPage from "./login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This will be the landing page</div>,
    errorElement: "This will be the error page",
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/sign-up",
    element: <SignUp/>
  },{
    path: "/forgot-password",
    element: <ForgotPassword/>
  },
  {
    path: "/experiment",
    element: <div>This will be the experiment page</div>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

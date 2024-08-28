
import './App.css'
import * as ReactDOM from "react-dom/client";
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
    element: <div>This will be the experiment page</div>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

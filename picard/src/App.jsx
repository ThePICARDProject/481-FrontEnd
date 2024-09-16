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
import LoginButton from "./components/google/loginButton";
import LogoutButton from "./components/google/logoutButton";
import { useEffect } from "react";
import { gapi } from "gapi-script";

const clientID =
  "804249098332-ueikhf2kldjrkifsboq52fn823hpd0h5.apps.googleusercontent.com";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  // {
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  // {
  //   path: "/forgot-password",
  //   element: <ForgotPassword />,
  // },
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
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientID: clientID,
        hosted_domain: "mix.wvu.edu",
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const handleLoginSuccess = (response) => {
    const accessToken = response.access_token;

    axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error("Error fetching profile info:", error);
      });
  };

  return <RouterProvider router={router} />;
}

export default App;

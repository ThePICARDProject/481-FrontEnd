import "./App.css";
import "./index.css";
import AuthProvider from "./components/authprovider/authprovider";
import Routes from "./routes";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage />,
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
//   {
//     path: "/access-page",
//     element: <AccessPage />,
//   },
//   {
//     path: "/sign-up",
//     element: <SignUp />,
//   },
//   {
//     path: "/forgot-password",
//     element: <ForgotPassword />,
//   },
//   {
//     path: "/experiment",
//     element: <Experiment />,
//   },
//   {
//     path: "/home",
//     element: <Home />,
//   },
//   {
//     path: "/data-visualization",
//     element: <DataVisualization />,
//   },
//   {
//     path: "/history",
//     element: <History />,
//   },
// ]);

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;

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
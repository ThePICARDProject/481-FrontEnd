import { useAuth } from "../components/authprovider/authprovider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const LoginStep = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.get("http://localhost:5080/User/userinfo").then(res => {
      console.log()
    }).catch(err => console.log(err))
    setToken("test")
        navigate("/", { replace: true });
  };
  useEffect(() => {
    handleLogin();
  }, [])
  return(
    <div></div>
  );
};

export default LoginStep;

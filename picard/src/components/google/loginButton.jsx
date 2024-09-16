import { GoogleLogin } from "react-google-login";

const clientID =
  "804249098332-ueikhf2kldjrkifsboq52fn823hpd0h5.apps.googleusercontent.com";

function LoginButton() {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientID}
        buttonText="Login with WVU MIX Account"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginButton;

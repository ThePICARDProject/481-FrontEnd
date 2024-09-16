import { GoogleLogout } from "react-google-login";

const clientID =
  "804249098332-ueikhf2kldjrkifsboq52fn823hpd0h5.apps.googleusercontent.com";

function LogoutButton() {
  const onSuccess = (res) => {
    console.log("Log out successful");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientID}
        buttonText="Logout of Google Account"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default LogoutButton;

import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = "86974978935-nlmnll9afjhk4clf0lke70co74e3f11g.apps.googleusercontent.com";

function Logout() {

    const onSuccess = (res) => {
        console.log("logout sucess");
    }

    const onFailure = (res) => {
        console.log("login failed, res: ", res);
    }

    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                />
        </div>
    )
}

export default Logout;
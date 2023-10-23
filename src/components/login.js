import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "86974978935-nlmnll9afjhk4clf0lke70co74e3f11g.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {
        console.log("login success, current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("login failed, res: ", res);
    }

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />
        </div>
    )
}

export default Login;
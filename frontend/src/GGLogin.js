import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
 
function GGLogin({ setToken }){

    const responseGoogle = async (response) => {
        console.log(response)
        if(response.accessToken){
            console.log('log in with access_token' + response.accessToken);
            let result = await axios.post('http://localhost:8000/api/google-login', {
                token: response.tokenId
            })
            console.log(result.data)
            localStorage.setItem("access_token", result.data.access_token)
            setToken(result.data.access_token)
        }
    }
    return(
        <div>
            <GoogleLogin
            clientId="945470689098-tpso84dve6i39j33qt0sgnc2s135nckj.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            />  
        </div>
    );
}

export default GGLogin;


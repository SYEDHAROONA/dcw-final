import React from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
 


function FBLogin({ setToken }){
    const responseFacebook = async (response) => {
        console.log(response)
        if(response.accessToken){
            console.log('log in with access_token' + response.accessToken);
            let result = await axios.post('http://localhost:8000/api/fblogin', {
                token: response.accessToken
            })
            console.log(result.data)
            localStorage.setItem("access_token", result.data.access_token)
            setToken(result.data.access_token)
        }
    }

    return(
        <div>
          <FacebookLogin
            appId="693962982025388"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}/>  
        </div>
    );
}

export default FBLogin;
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
 
const responseFacebook = async (response) => {
    console.log(response)
    if(response.accessToken){
        console.log('log in with access_token' + response.accessToken);
        let result = await axios.post('http://localhost:8000/api/fblogin', {
            token: response.accessToken
        })
        console.log(result.data)
        localStorage.setItem("access_token", result.data.access_token)
    }
}

function FBLogin(){
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
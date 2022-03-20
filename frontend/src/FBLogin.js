import React from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
 
const responseFacebook = async (response) => {
    if(response.access_token){
        console.log('log in with access_token' + response.access_token);
        let result = await axios.post('http://localhost:8000/api/login', {
            token: response.accessToken
        })
        console.log(result.data)
    }
}

function FBLogin(){
    return(
        <div>
          <FacebookLogin
            appId="693962982025388"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}/>  
        </div>
    );
}

export default FBLogin;
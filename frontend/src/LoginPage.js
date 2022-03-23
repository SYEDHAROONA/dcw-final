import React from 'react'
import FBLogin from './FBLogin'
import GGLogin from './GGLogin'

function LoginPage({ setToken }) {
  return (
    <div>
        <FBLogin setToken={setToken} />
        <GGLogin setToken={setToken} />
    </div>
  )
}

export default LoginPage
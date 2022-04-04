import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Login() {
  return (
      <div>
    <h1>Login Page</h1>

<Link to={"/products"}>Login</Link>
      </div>

  )
}

export default Login
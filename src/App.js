import './App.css';
import React from 'react'
import {button , form , formGroup , label , input } from 'react-bootstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

function App() {
  return (
    <div className="App">
     <header>
     <h1 className="Title"> Welcome To My Island Paradise</h1>
     <div className="container">
     <form className="login-form">
       <h4>Welcome</h4>
       <formGroup className="container-info">
         <label>Email</label>
         <br/>
         <input type="email" placeholder="Email"/>
       </formGroup>
       <formGroup>
         <label>Password</label>
         <br/>
         <input type="password" placeholder="Password"/>
       </formGroup>
       <button className="btn-lg btn-dark btn-block">Log in</button>
       <div className="text-center pt-3">
         Or continue with your social account
       </div>
       <FacebookLoginButton className="mt-3 mb-3"/>
       <div className="text-center">
         <a href="sign-up">Sign up</a>
         <span className="p-2"></span>
         <a href="/forgot-password">Forgot Password</a>
       </div>
     </form>
     </div>
      </header>

    </div>
  );
}

export default App;

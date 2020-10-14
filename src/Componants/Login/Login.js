import React, { useContext } from 'react';
import './Login.css';
import logo from '../Images/logos/crative-agency.png';
import google from '../Images/icons/google.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import fireBaseConfig from './firebase.config';
import { UserContext } from '../../App';

const Login = () => {

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    if(firebase.apps.length === 0) {
        firebase.initializeApp(fireBaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);

          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

    }
    return (
        <div className="container">
            <div className="login-logo">
            <Link to="/"><img src= {logo} alt=""/></Link>
            </div>
            
            <div className="login-panel">
                <div className="login-content">
                    <h4>Login With</h4>
                    <div onClick={handleGoogleSignIn} className="google">
                        <img src= { google } alt="google icon"/>
                        <span className = "googleText">Continue with Google</span>
                    </div>
                    <p>Don’t have an account? <span className="creatAccount" onClick={handleGoogleSignIn}>Create an account</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React, { useContext } from 'react';
import './Login.css';
import GoogleIcon from '@mui/icons-material/Google';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { userContext } from '../../App';
import { Link } from 'react-router-dom';


const app = initializeApp(firebaseConfig);

const Login = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const {displayName, email}= user;
                const signedInUser = {displayName, email};
                setLoggedInUser(signedInUser);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });

    }




    
    
    return (
        <div className="App">
             <form className="formating">
                <h1>Create An Account</h1>
                <label for="fname">Name: <input type="text" name="name" placeholder="Type Your Name"></input> </label>
                <br/>  <br/>
                <laberl for="email">Email: <input type="text" name="email" placeholder="Your Email Address"></input></laberl>
                <br/>  <br/>
                <label for="password">Password: <input type="password" name="password" placeholder="Type Your Password"></input></label>
                <br/>  <br/>
                <label for="password">Confirm Password: <input type="password" name="password" placeholder="Confirm Password"></input></label>
                <br/>  <br/>
                <button className="account-button">Create An Account</button>
                <br/>
                Alreadery Have An Accout? <Link style={{color: 'red'}} to="/login">Login</Link>
            </form>
            <button onClick={signInWithGoogle} className="login-button"><GoogleIcon style={{ float: 'left' }} /> Countinue With Google</button>
            
        </div>
        
    );
};

export default Login;
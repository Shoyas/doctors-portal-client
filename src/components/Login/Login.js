import React, { useContext } from 'react';
import loginImage from '../../asset/images/Group140.png';
import { useForm } from "react-hook-form";
import './Login.css';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const clickGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email};
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
        .catch(function(error) {
            
        });
    }
    

    
    
    
    return (
        <section className="row">
            <div className="col-md-6 text-center">
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <h2 style={{'margin-bottom': '50px'}} className="text-secondary">Login</h2>
                    <br/>
                    <input className="form-item form-area" placeholder="User name" name="example" ref={register({ required: true })} />
                    <br/>
                    <br/>
                    <input className="form-item form-area" placeholder="Password" name="exampleRequired" ref={register({ required: true })} />
                    <br/>
                    {errors.exampleRequired && <span style={{color: 'red'}}>This field is required</span>}
                    <br/>
                    <br/>
                    <input className="form-item btn-brand text-white" type="submit" value="Sign in" />
                </form>
                <br/>
                <br/>
                <button onClick={clickGoogleSignIn} className="btn btn-primary">Sign in with google</button>             
            </div>
            <div className="col-md-6">
                <img className="loginImage" src={loginImage} alt=""/>
            </div>
        </section>
    );
};

export default Login;
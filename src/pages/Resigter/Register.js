import React from 'react';
import { getAuth } from '@firebase/auth';

import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/firebase';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const { signInUsingGoogle, user } = useAuth();


    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");
    const auth = getAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";


    const registerNewUser = (e) => {


        e.preventDefault();
    }

    const handleHistory = () => {
        signInUsingGoogle();
        setTimeout(() => {
            history.push(redirect_uri)
        }, 10000);


    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);

    }

    const handlePasswordChange = (e) => {

        setpassword(e.target.value);
    }

    return (

        <div id="login">
            <h2>Please register:{user.email} </h2>

            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">PLEASE SIGN UP</h5>
                                <form className="form-signin" onSubmit={registerNewUser}>




                                    <hr className="my-4" />
                                    <button onClick={handleHistory} className="btn btn-lg btn-google btn-block text-uppercase w-100" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                                    <p className="text-center pt-3">Don't have an account?</p>
                                    <p className="text-center fs-6"><Link to="/login">SIGN IN</Link></p>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default Register;
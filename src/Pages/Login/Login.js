import React, { useContext, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import './Login.css'
import { AuthContext } from '../../Contexts/AuthProvider';
import { Helmet } from "react-helmet";
import swal from "sweetalert";
const Login = () => {

    const { userSignIn, googleLoginProvider } = useContext(AuthContext)
    const GoogleLogin = new GoogleAuthProvider()
    const [passworderror, setPassworderror] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSingIn = () => {
        googleLoginProvider(GoogleLogin)
            .then(result => {
                const user = result.user;
                fetch('https://lawyer-services-server-project.vercel.app/jwt', {

                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },

                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('Usertoken', data.Userstoken);
                    })
                navigate(from, { replace: true });
                swal({
                    title: "Your Login successfully ",
                    icon: "success",
                    button: "Yes",
                });


            })
            .catch(error => console.error(error))
    }

    const handleLoginAdd = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userSignIn(email, password)
            .then(result => {
                const user = result.user;
                fetch('https://lawyer-services-server-project.vercel.app/jwt', {

                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },

                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('Usertoken', data.Userstoken);
                        form.reset();
                        navigate(from, { replace: true });
                        swal({
                            title: "Your Login successfully ",
                            icon: "success",
                            button: "Yes",
                        });
                    })

            })
            .catch(error => {
                setPassworderror(('Your Password Wrong'))
            })
    }

    return (
        <div className='login-background'>
            <Helmet>
                <title>Login - Lawyer Services</title>
            </Helmet>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="registration-form">
                            <form onSubmit={handleLoginAdd}>
                                <h1 className='mb-5'>Login</h1>
                                <div className="form-group">
                                    <input type="text" name='email' className="form-control item" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" name='password' className="form-control item" placeholder="Password" required />
                                </div>
                                <p className='text-success'>{passworderror}</p>
                                <div className="form-group d-flex justify-content-between">
                                    <button type="submit" className="py-2 px-5 btn btn-outline-primary rounded-pill">Login</button>
                                    <Link to='/register'>create new account</Link>
                                </div>
                            </form>
                            <div className="social-media">
                                <h5>Sign up with social media</h5>
                                <div className="social-icons">
                                    <Link className='icon' onClick={handleGoogleSingIn} ><span><FaGoogle /></span></Link>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>

    );
};

export default Login;
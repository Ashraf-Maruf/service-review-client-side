import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider';
import { Helmet } from "react-helmet";
import swal from "sweetalert";

const Register = () => {

    const { newCreateUsers,ProfileDetails } = useContext(AuthContext)
    const [passworderror, setPassworderror] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.form?.pathname || '/';

    const handleRegisterUserAdd = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        if (!/(?=.*[A-Z]).*[A-Z]/.test(password)) {
            setPassworderror(('Please provide at least two Uppercase'))
            return;
        }
        if (password.length < 6) {
            setPassworderror(('Please should be at least 6 character'))
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setPassworderror(('Please add at least one special character'))
            return;
        }

        newCreateUsers(email, password)
            .then(result => {                
                handleUserProfile(name, photoURL)
                form.reset();
                navigate(from, { replace: true })
                swal({
                    title: "Your Register successfully ",
                    icon: "success",
                    button: "Yes",
                });
            })
            .catch(error => {
                swal({
                    title: "Your Email Invalid Please Valid Your Email ",
                    icon: "success",
                    button: "Yes",
                });
            })
    }

    const handleUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        ProfileDetails(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    
    return (
        <div className='login-background'>
            <Helmet>
                <title>Register - Lawyer Services</title>
            </Helmet>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="registration-form">
                            <form onSubmit={handleRegisterUserAdd}>
                                <h1 className='mb-5'>Create Account</h1>
                                <div className="form-group">
                                    <input type="text" name='name' className="form-control item" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" name='email' className="form-control item" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" name='photoURL' className="form-control item" placeholder="Your Photo URL" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" name='password' className="form-control item" placeholder="Password" required />
                                </div>
                                <p className='text-success'>{passworderror}</p>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-outline-primary">Register</button>
                                </div>
                            </form>
                            <div className="social-media"></div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Register;
import React from 'react';
import swal from "sweetalert";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from 'react-router-dom';
const AddServices = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleUserAddServices = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const message = form.message.value;
        const photo = form.photo.value;
        const price = form.price.value;

        const services = {
            name: name,
            picture: photo,
            price: price,
            discretion: message,
        }

        fetch('https://lawyer-services-server-project.vercel.app/addservice', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                navigate(from, { replace: true });
                if (data.acknowledged) {
                    form.reset();
                }
            })
            .catch(error => console.error(error))
        swal({
            title: "Your services add successfully ",
            text: "You clicked the button!",
            icon: "success",
            button: "Yes",
        });
    }

    return (
        <div className='services-back py-5'>
            <Helmet>
                <title>Add Services - Lawyer Services</title>
            </Helmet>
            <div className='container'>
                <div className='mt-5 pt-5'>
                    <div className="registration-form position-relative pt-2">
                        <form onSubmit={handleUserAddServices}>
                            <h1 className='mb-5 text-center'>Add Services</h1>
                            <div className="form-group">
                                <input type="text" name='name' className="form-control item" placeholder="Services Name" required />
                            </div>
                            <div className="form-group">
                                <input type="text" name='photo' className="form-control item" placeholder="Services photo" />
                            </div>
                            <div className="form-group">
                                <input type="text" name='price' className="form-control item" placeholder="Services Price " required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control item" name='message' placeholder='Services Massage' rows="3" required></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-outline-primary">  
                                Add Services 
                                </button>
                            </div>
                        </form>
                        <div className="social-media"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddServices;
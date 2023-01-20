import React from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import swal from "sweetalert";
const Update = () => {
    const storedUser = useLoaderData()

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/myreview';
    const handleReviewUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const message = form.message.value;  
        const update = {
            message,
        }

        fetch(`https://lawyer-services-server-project.vercel.app/myreview/${storedUser._id}`, {

            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                navigate(from, { replace: true });
                if (data.acknowledged) {
                    swal({
                        title: "Your Edit Review successfully ",
                        icon: "success",
                        button: "Yes",
                    });                    
                }
                form.reset();
            })
            .catch(error => console.error(error))

    }
    return (
        <div className='bg-secondary'>
            <Helmet>
                <title>Edit Review - Lawyer Services</title>
            </Helmet>
            <div className='container'>
                <div className='py-5'>
                    <div className="registration-form position-relative pt-2 mt-3">
                        <form onSubmit={handleReviewUpdate}>
                            <h1 className='mb-4 text-center'>Edit review</h1>
                            <div className="form-group">
                                <textarea className="form-control item" name='message' defaultValue={storedUser.message} placeholder='Your Massage' rows="3" required></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-outline-primary">Review Edit</button>
                            </div>
                        </form>
                        <div className="social-media"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;
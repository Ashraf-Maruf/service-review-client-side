import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Allreview from './Allreview';
import { Helmet } from "react-helmet";
import swal from "sweetalert";
const ServicesDetails = () => {
    const { _id, price, name, picture, discretion } = useLoaderData()
    const [allreview, setAllreview] = useState([])
    const { users } = useContext(AuthContext)
    const handleUserReviewAdd = e => {
        e.preventDefault()
        const form = e.target;
        const Name = form.Name.value;
        const email = users?.email || '';
        const picture = users?.photoURL || '';
        const message = form.message.value;

        const review = {
            services: _id,
            servicesName: name,
            customerName: Name,
            email,
            picture,
            message,
        }

        fetch('https://lawyer-services-server-project.vercel.app/review', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                }
            })
            .catch(error => console.error(error))

        swal({
            title: "Your review add successfully ",
            text: "You clicked the button!",
            icon: "success",
            button: "Yes",
        });
    }

    useEffect(() => {
        fetch(`https://lawyer-services-server-project.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setAllreview(data))
    }, [])

    return (
        <div className='services-back py-5'>
            <Helmet>
                <title>Services Details - Lawyer Services</title>
            </Helmet>
            <div className='container py-5 mt-5'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className="card">
                            <PhotoProvider>
                                <PhotoView src={picture}>
                                    <img src={picture} className="img-fluid p-2 rounded-3" style={{ height: '250px' }} alt="..." />
                                </PhotoView>
                            </PhotoProvider>
                            <div className="card-body">
                                <h2 className="card-title text-capitalize">{name}</h2>
                                <p className='fw-bold'>Price:<small className='ms-2'>${price}</small></p>
                                <p className="card-text">{discretion}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='mb-3'>
                            {
                                allreview.map(allReview => <Allreview

                                    key={allReview._id}
                                    allReview={allReview}

                                ></Allreview>)
                            }
                        </div>
                        <div className="registration-form position-relative pt-2">
                            <form onSubmit={handleUserReviewAdd}>
                                <h1 className='mb-4 text-center'>Customer review</h1>
                                <div className="form-group">
                                    <input type="text" name='Name' className="form-control item" placeholder="Your Name" required />
                                </div>
                                <div className="form-group d-none">
                                    <input type="text" name='email' className="form-control item" defaultValue={users?.email} placeholder="Your Name" readOnly />
                                </div>
                                <div className="form-group d-none">
                                    <input type="text" name='picture' className="form-control item" defaultValue={users?.photoURL} placeholder="Your Photo URL" readOnly />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control item" name='message' placeholder='Your Review Massage' rows="3" required></textarea>
                                </div>
                                <div className="form-group">
                                    <>
                                        {
                                            users?.uid ?
                                                <button type="submit" className="btn btn-outline-primary">Review Submit</button>
                                                :
                                                <Link className="btn btn-outline-primary" to='/Login'>Login Please</Link>

                                        }
                                    </>
                                </div>
                            </form>
                            <div className="social-media"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;
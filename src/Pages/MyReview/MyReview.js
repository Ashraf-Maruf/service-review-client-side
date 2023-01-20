import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import ReviewDetails from './ReviewDetails';
import { Helmet } from "react-helmet";
import swal from "sweetalert";
const MyReview = () => {

    const { users,userSignOut } = useContext(AuthContext);
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`https://lawyer-services-server-project.vercel.app/myreview?email=${users?.email}`,{
            headers:{
                authorization: `TokeN ${localStorage.getItem('Usertoken')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 404){
                    userSignOut()
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                setReview(data)
            })
    }, [users?.email, userSignOut])

    const handleReviewDelete = _id => {

        const proceed = swal({
            title: "Are you sure, Your review delete",
            text: "You clicked the button!",
            icon: "success",
            button: "Yes",
        });
        if (proceed) {
            fetch(`https://lawyer-services-server-project.vercel.app/myreview/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const reviewRemainig = review.filter(view => view._id !== _id)
                        swal({
                            title: "Your Review Delete success",
                            icon: "success",
                            button: "Delete",
                          });  
                        setReview(reviewRemainig)
                                               
                    }                    
                })
                
        }
    }
    return (
        <div className='services-back py-5' style={{ height: '600px' }}>
            <Helmet>
                <title>My Review - Lawyer Services</title>
            </Helmet>
            <div className='container py-5'>
                <div className='row row-cols-1 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 g-4'>
                    {
                        review.map(view => <ReviewDetails
                            key={view._id}
                            view={view}
                            handleReviewDelete={handleReviewDelete}
                        ></ReviewDetails>)
                    }
                </div>
            </div>

        </div>

    );
};

export default MyReview;
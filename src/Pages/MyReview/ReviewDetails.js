import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewDetails = ({view,handleReviewDelete}) => {    
    const {_id,customerName, picture,message,servicesName} = view;

    const [reviewservice, setReviewservice] = useState([])

    useEffect(() =>{
          fetch(`https://lawyer-services-server-project.vercel.app/myreview/${_id}`)  
          .then(res => res.json())
          .then(data => setReviewservice(data))
    },[_id])
    return (
        <div>
            <div className="card py-2 mb-3">
                <div className="card-body text-center">
                    <h4 className="card-title">{servicesName}</h4>
                </div>
                <div className="comment-widgets">
                    <div className="d-flex flex-row comment-row m-t-0">
                        <div className="p-2"><img src={picture} alt="user" width="50" className="rounded-circle" /></div>
                        <div className="comment-text w-100">
                            <h6 className="font-medium">{customerName}</h6>
                            <p>{message}</p>
                            <div className="comment-footer"><Link to={`/myreview/${_id}`}><button type="button" className="btn btn-success btn-sm me-3">Edit Review</button></Link><button type="button" onClick={() => handleReviewDelete(_id)} className="btn btn-danger btn-sm">Review Delete</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;
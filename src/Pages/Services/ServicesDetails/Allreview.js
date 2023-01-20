import React from 'react';

const Allreview = ({allReview}) => {
    const {ServicesName,picture,customerName,message} =allReview;
    return (
        <div>
            <div className="card py-2 mb-3">
                <div className="card-body text-center">
                    <h4 className="card-title">{ServicesName}</h4>
                </div>
                <div className="comment-widgets">
                    <div className="d-flex flex-row comment-row m-t-0">
                        <div className="p-2"><img src={picture} alt="user" width="50" className="rounded-circle" /></div>
                        <div className="comment-text w-100">
                            <h6 className="font-medium">{customerName}</h6>
                            <p>{message}</p>
                            <div className="comment-footer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allreview;
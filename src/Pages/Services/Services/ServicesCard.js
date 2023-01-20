import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesCard = ({ service }) => {
    const { _id, price, name, picture, discretion } = service;
    return (
        <div className="col">
            <div className="card  h-100  shadow-lg rounded">
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <img src={picture} className="img-fluid p-2 rounded-3" style={{ height: '250px' }} alt="..." />
                    </PhotoView>
                </PhotoProvider>                
                <div className="card-body">
                    <h4 className="card-title text-capitalize">{name}</h4>
                    <p className='fw-bold'>Price:<small className='ms-2'>${price}</small></p>
                    <p className="card-text">{discretion.slice(0, 100) + '...'}</p>
                    <div className='d-flex justify-content-end'>
                        <Link className='btn btn-outline-info' to={`/services/${_id}`}>Services Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
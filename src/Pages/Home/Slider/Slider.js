import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';
const Slider = () => {
    return (
        <div>
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                <div className="carousel-inner">
                    <div className="carousel-item active banner1">
                        <div className="carousel-caption">
                            <h2>We Are Best Law Firms</h2>
                            <p className='d-none d-lg-block d-xl-block d-xxl-block d-md-block '>U.S. citizens are in a constant battle for their rights to privacy, fighting the government's increasingly pervasive surveillance and justicial needs. One area where court opinions conflict with the public's expectation of privacy is over the realm of personal electronic communications. </p>
                            <Link to='/services' className='btn btn-outline-info'>All Services</Link>
                        </div>
                    </div>
                    <div className="carousel-item banner2">
                        <div className="carousel-caption">
                            <h2>We Are Best Law Firms</h2>
                            <p className='d-none d-lg-block d-xl-block d-xxl-block d-md-block '>U.S. citizens are in a constant battle for their rights to privacy, fighting the government's increasingly pervasive surveillance and justicial needs. One area where court opinions conflict with the public's expectation of privacy is over the realm of personal electronic communications. </p>
                            <Link to='/services' className='btn btn-outline-info'>All Services</Link>
                        </div>
                    </div>
                    <div className="carousel-item banner3">
                    <div className="carousel-caption">
                            <h2>We Are Best Law Firms</h2>
                            <p className='d-none d-lg-block d-xl-block d-xxl-block d-md-block '>U.S. citizens are in a constant battle for their rights to privacy, fighting the government's increasingly pervasive surveillance and justicial needs. One area where court opinions conflict with the public's expectation of privacy is over the realm of personal electronic communications. </p>
                            <Link to='/services' className='btn btn-outline-info'>All Services</Link>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" ariaHidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" ariaHidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;
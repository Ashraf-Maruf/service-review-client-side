import React from 'react';
import { FaGavel } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaFacebookSquare,FaInstagramSquare,FaTwitterSquare } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
    return (
        <footer className="w-100 py-4 flex-shrink-0">
            <div className="container py-4">
                <div className="row gy-4 gx-5">
                    <div className="col-lg-4 col-md-6">
                        <Link className="navbar-brand text-white fw-bold fs-2" to='/'><span className='fs-2  me-2'><FaGavel /></span>Lawyer Services</Link>
                        <p className="small text-muted mt-2">Lawyers, also known as attorneys, are certified professionals who advise and represent natural and juristic persons in legal matters.</p>
                        <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. 2022</p>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white mb-3">Quick links</h5>
                        <ul className="list-unstyled text-muted">
                            <Link className='nav-link' to='/'>Home</Link>
                            <Link className='nav-link' to='/services'>Services</Link>
                            <Link className='nav-link' to='/blog'>Blog</Link>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white mb-3">Quick links</h5>
                        <ul className="list-unstyled text-muted">
                            <Link className='nav-link' to='/'>Home</Link>
                            <Link className='nav-link' to='/services'>Services</Link>
                            <Link className='nav-link' to='/blog'>Blog</Link>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h5 className="text-white mb-3">Social icon</h5>
                        <div>
                            <Link><span className='me-2 text-white'><FaFacebookSquare /></span></Link>
                            <Link><span className='me-2 text-white'><FaInstagramSquare /></span></Link>
                            <Link><span className='me-2 text-white'><FaTwitterSquare /></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import AboutImg from '../../../assets/images/banner/banner-02.jpg'
import { FaAngleDoubleRight } from "react-icons/fa";
const About = () => {
    return (
        <div className='py-5'>
            <div className='container pt-4'>
                <div className='row'>
                    <div className='col-lg-5'>
                        <img className="img-fluid rounded-3" src={AboutImg}></img>
                    </div>
                    <div className='col-lg-5 offset-lg-2'>
                        <h5 className='text-info'>About us</h5>
                        <h2>We Are Best Law<br />Consultant</h2>
                        <p>Best Lawyers is the oldest and most respected peer-review publication in the legal profession. A listing in Best Lawyers is widely regarded by both clients and legal professionals as a significant honor, conferred on a lawyer by his or her peers. For 40 years, Best Lawyers lists have earned the respect of the profession, the media, and the public as the most reliable, unbiased source of legal referrals anywhere.</p>
                        <div>
                            <p><span className='me-2'><FaAngleDoubleRight /></span>Bankruptcy Lawyer</p>
                            <p><span className='me-2'><FaAngleDoubleRight /></span>Usiness Lawyer (Corporate Lawyer)</p>
                            <p><span className='me-2'><FaAngleDoubleRight /></span>Criminal Defense Lawyer</p>
                            <p><span className='me-2'><FaAngleDoubleRight /></span>Family Lawyer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
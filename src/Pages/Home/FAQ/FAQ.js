import React from 'react';
import FaqImg1 from '../../../assets/images/faq/Faq-01.jpg'
import FaqImg2 from '../../../assets/images/faq/Faq-02.jpg'
import FaqImg3 from '../../../assets/images/faq/Faq-3.jpg'
const FAQ = () => {
    return (
        <div className=' py-5'>
            <div className='container py-4'>
                <div className='row'>
                    <div className='col-lg-5'>
                        <div className='row'>
                            <div className='col-lg-12 mb-4'>
                                <img className="img-fluid rounded-3 shadow-lg" src={FaqImg1} alt='' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6 mb-4'>
                                <img className="img-fluid rounded-3 shadow-lg" src={FaqImg2} alt='' />
                            </div>
                            <div className='col-lg-6 mb-4'>
                                <img className="img-fluid rounded-3 shadow-lg" src={FaqImg3} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 offset-lg-1'>
                        <div className='mb-4'>
                            <h5 className='text-danger'>FAQ</h5>
                            <h2>We Have All Your <br />Answer Here</h2>
                        </div>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        What Is a Bankruptcy Lawyer?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">A bankruptcy lawyer specializes in giving legal advice to a client about bankruptcy, prepares legal documents for the client and represents the client in court. An attorney must hold a law degree and be licensed in the state where they do business.<code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        What’s the Difference between a Corporate Lawyer and a Business Lawyer?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <h5>Corporate lawyers handle</h5>
                                        <div>
                                            <p>Business incorporation</p>
                                            <p>Shareholder rights</p>
                                            <p>International contracts</p>
                                            <p>Corporate assets</p>
                                        </div>
                                        <h5>Business lawyers handle</h5>
                                        <div>
                                            <p>Business incorporation</p>
                                            <p>Shareholder rights</p>
                                            <p>International contracts</p>
                                            <p>Product and service conditions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    What is Family Law?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Family law is a legal practice area that focuses on issues involving family relationships such as marriage, adoption, divorce, and child custody, among others. Attorneys practicing family law can represent clients in family court proceedings or in related negotiations. They can also draft important legal documents such as court petitions or property agreements</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
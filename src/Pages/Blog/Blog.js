import React from 'react';
import { Helmet } from "react-helmet";
const Blog = () => {
    return (
        <div className='bg-secondary py-5'>
            <Helmet>
                <title>Lawyer Services Blog</title>
            </Helmet>
            <div className='container py-5'>
                <div>
                    <h1 className='text-center mb-4 text-white'>Four questions answer</h1>
                </div>
                <div className='row row-cols-1 row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-1 g-4'>
                    <div className='col-lg-6'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center mb-4">Difference between SQL and NoSQL</h5>
                                <div className='row'>
                                    <div className='col-6'>
                                        <h2 className='text-center text-decoration-underline'>SQL</h2>
                                        <p><small className='fw-bold'>Data Storage:-</small> SQL does not support hierarchical storage of data.</p>
                                        <p><small className='fw-bold'>Ideal Use Cases:-</small> SQL is best suitable for complex queries, multi-row transactions.</p>
                                        <p><small className='fw-bold'>Hardware:-</small> Databases that support SQL require powerful hardware to support vertical scaling.</p>
                                        <p><small className='fw-bold'>Examples:-</small> SQL supports databases like MySQL, SQL Server, Oracle, etc.</p>
                                    </div>
                                    <div className='col-6'>
                                        <h2 className='text-center text-decoration-underline'>NoSQL</h2>
                                        <p><small className='fw-bold'>Data Storage:-</small> NoSQL is best suited for hierarchical storage of data.</p>
                                        <p><small className='fw-bold'>Ideal Use Cases:-</small> NoSQL is best suited for unstructured data or documents. Not ideal for complex queries.</p>
                                        <p><small className='fw-bold'>Hardware:-</small> NonSQL databases require commodity hardware for horizontal scaling.</p>
                                        <p><small className='fw-bold'>Examples:-</small> Nosql databases are Hbase, MongoDB, Redis, etc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center mb-4">What is the difference between javascript and NodeJS?</h5>
                                <div className='row'>
                                    <div className='col-6'>
                                        <h2 className='text-center text-decoration-underline'>JavaScript</h2>
                                        <p>It is an accessible, bridge, parsed, lightweight, reactive, and web apps programming language.</p>
                                        <p>It's a programming language, after all. Any browser with a competent browser engine will operate.</p>
                                        <p>The node community does not care about JavaScript.</p>
                                        <p>It's made for creating network-centric apps.</p>
                                    </div>
                                    <div className='col-6'>
                                        <h2 className='text-center text-decoration-underline'>Node.js</h2>
                                        <p>It's a bridge, open-source Js runtime environment for executing Js on the server.</p>
                                        <p>It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming.</p>
                                        <p>All node projects represent the JavaScript community.</p>
                                        <p>It's made for real-time data-intensive apps that run on multiple platforms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center mb-4">What is JWT, and how does it work?</h5>
                                <p className="card-text">JSON Web Token (JWT) is an open standard (RFC 7519) that specifies a compact and self-contained way of transmitting information securely as a JSON object between parties. This information can be verified and trusted as it has been digitally signed. It can also hold all the user's claim, like authorization information, so that the service provider does not need to access the database to validate user roles and permissions for each request; data is extracted from the token.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">How does NodeJS handle multiple requests at the same time?</h5>
                                <p className="card-text">I understand that Node.js uses a single-thread and an event loop to process requests only processing one at a time which is non-blocking. But still, how does that work, lets say 10,000 concurrent requests. The event loop will process all the requests? Would not that take too long? I can not understand yet how it can be faster than a multi-threaded web server. I understand that multi-threaded web server will be more expensive in resources memory, CPU, but would not it still be faster? I am probably wrong; please explain how this single-thread is faster in lots of requests, and what it typically does in high level when servicing lots of requests like 10,000. And also, will that single-thread scale well with that large amount? Please bear in mind that I am just starting to learn Node.js.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
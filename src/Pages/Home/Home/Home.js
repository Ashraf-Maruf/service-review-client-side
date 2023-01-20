import React from 'react';
import About from '../About/About';
import FAQ from '../FAQ/FAQ';
import Slider from '../Slider/Slider';
import { Link, useLoaderData } from 'react-router-dom';
import ServicesCard from './../../Services/Services/ServicesCard';
import { Helmet } from "react-helmet";
const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>Lawyer Services Home</title>
            </Helmet>
            <Slider></Slider>
            <About></About>
            <div className='services-back py-5'>
                <div className='container py-5'>
                    <div className='row row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 g-4'>
                        {
                            services.map(service => <ServicesCard

                                key={service._id}
                                service={service}
                            >
                            </ServicesCard>)
                        }
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                        <div className='position-relative'>
                            <Link className='btn btn-outline-info py-2 px-5 text-white' to='/services'>See All</Link>
                        </div>
                    </div>
                </div>
            </div>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;
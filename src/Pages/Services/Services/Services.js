import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from './ServicesCard';
import './Services.css'
import { Helmet } from "react-helmet";
const Services = () => {
    const services = useLoaderData()
    return (
        <div className='services-back py-5'>
            <Helmet>
                <title>Services - Lawyer Services</title>
            </Helmet>
            <div className='container py-5'>
                <div className='row row-cols-1 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 g-4'>
                    {
                        services.map(service => <ServicesCard
                            key={service._id}
                            service={service}
                        ></ServicesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
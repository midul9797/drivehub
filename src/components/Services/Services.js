import React from 'react';
import Service from '../Service/Service';
import useServices from '../../Hooks/useServices';

const Services = () => {
    // useServices Custom Hook
    const [services] = useServices();
    return (
        <div>
            <h1 className="text-center mt-5">Our <span className="text-danger">Services</span></h1>
            <div className="services row g-5 text-center">
                {/* Mapping through Services returning Service one by one */}
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>

    );
};

export default Services;
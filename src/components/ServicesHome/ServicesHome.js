// ServicesHome Component for Home Page
import React from 'react';
import Service from '../Service/Service';
import useServices from '../../Hooks/useServices';
import './ServicesHome.css'
const ServicesHome = () => {
    // useServices Custom Hook
    const [services] = useServices();
    const newServices = [];
    // Adding first three services in newServices
    services.filter(service => service.id <= 3 ? newServices.push(service) : 0);
    console.log(newServices)
    return (
        <div className="services-home">
            <h1 className="text-center">Our <span className="text-danger">Services</span></h1>
            <div  className="services row g-5 text-center">
            {
                newServices.map(service => <Service key={service.id} service={service}></Service>)
            }
        </div>
        </div>

    );
};

export default ServicesHome;
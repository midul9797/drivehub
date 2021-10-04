// Service Component
import { Button } from '@mui/material';
import React from 'react';

const Service = (props) => {
    // Destructuring
    const {image, name, time, duration, support, repair, price} = props.service;
    return (
            <div className="service col-4">
                        <img src={image} alt="" className="img-fluid mb-4 p-2" />
                        <h2>{name}</h2>
                        <p className="text-muted p-3"><small>{time}</small></p>
                        <p className="text-muted p-3"><small>{duration}</small></p>
                        <p className="text-muted p-3"><small>{support}</small></p>
                        <p className="text-muted p-3"><small>{repair}</small></p>
                        <h3>$ {price}</h3>
                        <Button variant="contained" color="error" className="mb-5">Add to Cart</Button>
            </div>
    );
};

export default Service;
// Banner Component
import { Button }  from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <div></div>
            <h1>DriveHub</h1>
            <p>We make learning to drive easy and stress free</p>
            <p>We maintain high security for our drivers</p>
            {/* Link to Services */}
            <Link to="./services">
                <Button variant="contained" color="error">Read More</Button>
            </Link>
        </div>
    );
};

export default Banner;
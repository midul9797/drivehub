// Contact Banner Component for Homepage 
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './ContactBanner.css'
const ContactBanner = () => {
    return (
        <div className="contact-banner text-center text-light">
            <h1>Need any <span className="text-danger">Help</span>?</h1>
            {/* Link to Contact Us */}
            <Link to="/contact"><Button variant="contained" color="error" className="my-5 fw-bold pt-2">Contact Us</Button></Link>
            
        </div>
    );
};

export default ContactBanner;
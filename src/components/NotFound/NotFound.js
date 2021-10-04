// NotFound Component
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center bg-dark">
            <img src="./404.png" alt="" className=""/>
            <br />
            {/* Link to Home */}
            <Link to="./home">
                <Button varient="contained" color="error" className="bg-danger text-light mb-5">Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;
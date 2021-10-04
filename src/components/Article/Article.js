// Article Component
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css'
const Article = () => {
    return (
        <div className="article d-flex">
            <div>
                <img src="https://welcome-center-germany.com/wp-content/uploads/2015/12/driving-car-germany.jpg" alt="" />
            </div>
            <div>
                <h1>
                    We are an Experienced, Reliable & Friendly Driving School
                </h1>
                <p className="text-muted fw-bold">
                    We are one of the best driving school in South Asia. We provide best services and our instructors are the best in the world. We always make sure our drivers gets the best.We have services for lots of variants. Mainting quality is our worst habit.
                </p>
                {/* Link to About US */}
                <Link to="/about">            
                    <Button variant="contained" color="error" className="fw-bold ms-4 mt-3">About US</Button>
                </Link>

            </div>
        </div>
    );
};

export default Article;
// Intructors Component
import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';

const Instructors = () => {
    // useState
    const [instructors, setInstructors] = useState([]);
    // Loading Data using useEffect
    useEffect(()=> {
        fetch('./instructor.json')
        .then(res=> res.json())
        .then(data => setInstructors(data));
    }, []);
    return (
        <div className="row m-5">
            {/* Mapping through Instructors returning Instructor one by one */}
           {
               instructors.map(instructor => <Instructor key={instructor.id} instructor={instructor}></Instructor>)
           } 
        </div>
    );
};

export default Instructors;
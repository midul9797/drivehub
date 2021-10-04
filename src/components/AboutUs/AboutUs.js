// About US Component
import React from 'react';
import Instructors from '../Instructors/Instructors';

const AboutUs = () => {
    return (
        <div>
            {/* Company Overvies */}
            <h1 className="text-center my-5">Company <span className="text-danger"> Overview</span></h1>
            <div className="row m-5">
                <img src="https://streetsmartdrivingschool.com/wp-content/uploads/2016/11/home_02.jpg" alt="" className="me-5 col-6" />
                <div className="col-5 mt-5">
                    <h1>Affordable, Effective and Convenient Driving Lessons </h1>
                    <p className="text-muted mt-3 lh-lg">Safe Drive Driving School has designed classes with the busy student in mind. We have a very flexible system of classes that allows students to take the classes in any order they wish and at their own pace. In some schools you have a very strict schedule for taking the classes and this does not work into a lot of the current schedules of kids busy lives. </p>
                </div>
            </div>
            {/* Instructors Details */}
            <h1 className="text-center">Our <span className="text-danger">Instructors</span></h1>
            <Instructors></Instructors>
            <div>
            </div>
        </div>
    );
};

export default AboutUs;
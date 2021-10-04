// Instructor Component
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Instructor = (props) => {
    // Destructuring
    const {name, image, facebook, instagram, twitter, job} = props.instructor;
    return (
        <div className="col-4 text-center">
            <img src={image} alt="" className="w-75 h-50 rounded-circle" />
            <h3 className="pt-5">{name}</h3>
            <p className="text-muted">{job}</p>
            {/* Material UI Social Icons */}
            <a className="text-dark px-3" href={facebook}><FacebookIcon></FacebookIcon></a>
            <a className="text-dark px-3" href={instagram}><InstagramIcon></InstagramIcon></a>
            <a className="text-dark px-3" href={twitter}><TwitterIcon></TwitterIcon></a>
        </div>
    );
};

export default Instructor;
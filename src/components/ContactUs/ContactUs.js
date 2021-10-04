// Contact Us Component
import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
// Background Gradient CSS
const ContactUs = () => {
  const bgGradient = {
    backgroundImage: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)'
  }
  return (
    <div className="container row m-lg-5 m-5">
      <div className="col-12 col-lg-6 text-center py-5 shadow text-dark" style={bgGradient}>
        <h1 className="fw-bold">Contact Us</h1>
        <div className="py-5">
          {/* Material UI Icons */}
          <h4><LocationOnIcon></LocationOnIcon> Address</h4>
          <p className="text-main">Cheslyn Hay, Walsall WS6 7HX, United Kingdom</p>
          <h4><PhoneIcon></PhoneIcon>  Phone</h4>
          <p className="text-main">+123 456 7989</p>
          <h4><EmailIcon></EmailIcon>  Email</h4>
          <p className="text-main">youandme@drivehub.com</p>
        </div>
      </div>
      {/* Contact Us Form */}
      <div className="col-12 col-lg-6 shadow">
        <form action="" className="p-5">
          <h1 className="text-danger fw-bold mb-5">Send us a message</h1>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label fw-bold">Name</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label fw-bold">Email</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Your Email" />
          </div>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
              style={{ height: '150px' }}></textarea>
            <label for="floatingTextarea2">Your Message</label>
          </div>
          <div className="p-3">
            <button type="submit" className="btn btn-danger px-4 fw-bold">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
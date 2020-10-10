import React from 'react';
import './Testimonials.css';

const Testimonials = ({testimonial}) => {
    return (
        <div className="col-md-3 offset-md-1 patients-card">
           <p className="text-secondary" style={{"height": "250px"}}>{testimonial.description}</p>
           <div className="d-flex justify-content-center patient-btm">
                <img id="patient-img" src={testimonial.pic} alt=""/>
                <div className="patient-info">
                    <h6 style={{color: "#1CC7C1"}}>{testimonial.name}</h6>
                    <small className="text-secondary">{testimonial.from}</small>    
                </div>   
            </div> 
        </div>
    );
};

export default Testimonials;
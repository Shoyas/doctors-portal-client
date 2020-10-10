import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section className="contactUs-container">
            <br/>
            <br/>
            <h5 style={{color: "#1CC7C1"}}>CONTACT US</h5>
            <h2 style={{color: "white"}}>Always Connect With Us</h2>

            <form action="" className="contact-form">
                <input className="form-item" type="email" name="" placeholder="Email Address*" id=""/>
                <br/>
                <br/>
                <input className="form-item" type="text" name="" placeholder="Subject*" id=""/>
                <br/>
                <br/>
                <textarea className="form-item" name="message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                <br/>
                <br/>
                <button className="btn btn-primary">Submit</button>
                <br/>
                <br/>
                <br/>
                <br/>
            </form>
        </section>
    );
};

export default ContactUs;
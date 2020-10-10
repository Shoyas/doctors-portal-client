import React from 'react';
import './AppointmentBg.css';
import doctor from '../../../asset/images/doctorBig.png';

const AppointmentBg = () => {
    return (
        <section className="appointmentBg-container">
            <div className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <img src={doctor} alt=""/>
                </div>
                <div className="col-md-6 content-detail">
                    <h5 style={{color: "#11D0DB"}}>APPOINTMENT</h5>
                    <h1 className="text-white">Make an appointment <br/>Today</h1>
                    <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ut vero accusantium odio excepturi est natus maxime quo eveniet doloribus!</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBg;
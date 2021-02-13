import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {

    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    return (
        <div  style={{'padding': '0px 35px', 'margin-top': '50px'}} className="col-md-4 mb-5">
            <div className="card">
                <div className="card-body text-center">
                    <h5 className="text-color">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} style={{color: 'white'}} className="btn btn-brand text-uppercase">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} date={date} closeModal={closeModal}></AppointmentForm>

                </div>
            </div>
            
        </div>
    );
};

export default BookingCard;
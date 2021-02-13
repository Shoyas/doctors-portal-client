import React from 'react';
import frontChair from '../../../asset/images/frontChai.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-3 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Appointment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />  
            </div>
            <div className="col-md-6">
                <img src={frontChair} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default AppointmentHeader;
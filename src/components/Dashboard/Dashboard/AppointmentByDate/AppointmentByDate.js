import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h2 className="text-brand text-center">Appointments</h2>
            <h5 className="text-brand text-center">Total Appointments : {appointments.length}</h5>
            {
                appointments.length ?
                 <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentByDate;
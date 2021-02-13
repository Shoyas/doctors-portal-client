import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Dashboard/Sidebar/Sidebar';
import TotalPatients from './TotalPatients/TotalPatients';

const AllPatients = () => {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allPatients')
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [])

    return (
        <section className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h6>All Patients : {appointments.length}</h6>
                <TotalPatients appointments={appointments}></TotalPatients>
            </div>
        </section>
    );
};

export default AllPatients;
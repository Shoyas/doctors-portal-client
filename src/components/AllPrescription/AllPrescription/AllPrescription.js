import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Dashboard/Sidebar/Sidebar';
import Prescription from '../Prescription/Prescription';

const AllPrescription = () => {
    
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allPatients')
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [])

    return (
        <section className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h4>All Prescriptions</h4>
                <Prescription appointments={appointments} ></Prescription>
            </div>
        </section>
    );
};

export default AllPrescription;
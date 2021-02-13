import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctor, setDoctor] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctor(data))
    }, [])

    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    <Doctor doctor={doctor}/>
                    <Doctor doctor={doctor}/>
                    <Doctor doctor={doctor}/>
                </div>
            </div>
        </section>
    );
};

export default Doctors;
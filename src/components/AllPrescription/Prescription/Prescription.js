import React from 'react';

const Prescription = ({appointments}) => {
    
    return (
        <table className="table">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Date</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Prescription</th>
                </tr>
            </thead>
            <tbody>
                {
                  appointments.map((appointment, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.name}</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.weight}</td>
                        {/* weight will be prescription */}
                        
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default Prescription;
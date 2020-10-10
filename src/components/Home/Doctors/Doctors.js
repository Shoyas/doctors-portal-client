import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import doctor from '../../../asset/images/doctor-sm.png';

const Doctors = () => {
    return (
        <div style={{'margin-top': '50px'}}>
            <h5 style={{'color': '#1CC7C1', 'text-align': 'center'}}>Our Doctors</h5>
            <div className="row" style={{'margin-top': '30px'}}>
                <div className="col-md-3 offset-1 text-center">
                    <img style={{'height': '200px'}} src={doctor} alt=""/>
                    <div>
                        <h6>Dr. Caudi</h6>
                        <FontAwesomeIcon icon={faPhoneAlt} style={{'color': '#1CC7C1'}}/>
                        <small>+15 846 385 709</small>
                    </div>
                </div>
                <div className="col-md-3 offset-1 text-center">
                    <img style={{height: '200px'}} src={doctor} alt=""/>
                    <div>
                        <h6>Dr. Caudi</h6>
                        < FontAwesomeIcon icon={faPhoneAlt} style={{'color': '#1CC7C1'}}/>
                        <small>+15 846 385 709</small>
                    </div>
                </div>
                <div className="col-md-3 offset-1 text-center">
                    <img style={{height: '200px'}} src={doctor} alt=""/>
                    <div>
                        <h6>Dr. Caudi</h6>
                        <FontAwesomeIcon icon={faPhoneAlt} style={{'color': '#1CC7C1'}}/>
                        <small>+15 846 385 709</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;
import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendarAlt, faCog, faNotesMedical, faUser, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div>
            <div className="menu-item">
                <Link to='/dashboard'>
                    <h5><FontAwesomeIcon icon={faBars}/><span className="dashboard">Dashboard</span></h5>
                </Link>
            </div>
            <div className="menu-item">
                <Link to='/appointment'>
                    <h5><FontAwesomeIcon icon={faCalendarAlt}/><span className="dashboard">Appointment</span></h5>
                </Link>
            </div>
            <div className="menu-item">
                <Link to='/allPatients'>
                    <h5><FontAwesomeIcon icon={faUser} /><span  className="dashboard">Patients</span></h5>
                </Link>
            </div>
            <div className="menu-item">
                <Link to='/prescription'>
                    <h5><FontAwesomeIcon icon={faNotesMedical} /><span  className="dashboard">Prescriptions</span></h5>
                </Link>
            </div>
            <div className="menu-item">
                <Link to='/addDoctors'>
                    <h5><FontAwesomeIcon icon={faUserPlus} /><span  className="dashboard">Add Doctor</span> </h5>                
                </Link>
            </div>
            <div className="menu-item">
                <Link to='/settings'>
                    <h5><FontAwesomeIcon icon={faCog} /><span  className="dashboard">Settings</span> </h5>                
                </Link>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="menu-item">
                <Link to='/logout'>
                    <h5><FontAwesomeIcon icon={faSignOutAlt} /><span  className="dashboard">Log Out</span></h5>                
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
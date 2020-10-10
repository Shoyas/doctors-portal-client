import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <section className="footer-container">
            <div className="row footer-detail">
                <div className="col-md-3">
                    <ul className="text">
                        <br/>
                        <br/>
                        <span className="text-secondary">
                            <li><p>Emergency Dental Care</p></li>
                            <li><p>Check Up</p></li>
                            <li><p>Treatment of Personal Diseases</p></li>
                            <li><p>Tooth Extraction</p></li>
                            <li><p>Check Up</p></li>
                        </span>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="text">
                        <li><h5 style={{color: '#11D0E0'}}>Services</h5></li>
                        <span className="text-secondary">
                            <li><p>Emergency Dental Care</p></li>
                            <li><p>Check Up</p></li>
                            <li><p>Treatment of Personal Diseases</p></li>
                            <li><p>Tooth Extraction</p></li>
                            <li><p>Check Up</p></li>
                            <li><p>Check Up</p></li>
                            <li><p>Check Up</p></li>
                        </span>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="text">
                        <li><h5 style={{color: '#11D0E0'}}>Oral Health</h5></li>
                        <span className="text-secondary">
                            <li><p>Emergency Dental Care</p></li>
                            <li><p>Check Up</p></li>
                            <li><p>Treatment of Personal Diseases</p></li>
                            <li><p>Tooth Extraction</p></li>
                            <li><p>Check Up</p></li>
                            <li><p>Check Up</p></li>
                            <li><p>Check Up</p></li>
                        </span>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="text">
                        <li><h5 style={{color: '#11D0E0'}}>Our Address</h5></li>
                        <span className="text-secondary">
                            <li><p>New York - 101010 Hudson</p></li>
                            <li><p>Yards</p></li>
                            <span className="icons d-flex justify-content-around">
                                <FontAwesomeIcon icon={faFacebook}/>
                                <FontAwesomeIcon icon={faGooglePlus}/>
                                <FontAwesomeIcon icon={faTwitter}/>
                            </span>
                            <br/>
                            <br/>
                            <br/>
                            <li><p>Call Now</p></li>
                            <p className="contact-num">+2025550295</p>
                        </span>
                    </ul>

                </div>
            </div>
            <div className="copyRight text-center text-secondary">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </section>
    );
};

export default Footer;
import React from 'react';
import frontChair from '../../../asset/images/frontChai.png';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-3 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile<br/>Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quo quod quaerat eum, earum beatae fugit odit optio, nostrum ipsum, in placeat repellendus! Debitis, temporibus?</p>
                <button type="button" className="btn btn-primary">Get Appointment</button>
            </div>
            <div className="col-md-6">
                <img src={frontChair} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default HeaderMain;
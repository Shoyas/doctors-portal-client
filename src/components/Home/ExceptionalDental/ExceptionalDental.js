import React from 'react';
import exceptionalDental from'../../../asset/images/exceptionalDental.png';

const ExceptionalDental = () => {
    return (
        <section style={{height: '600px'}} className="row d-flex justify-content-center align-items-center mt-10">
            <div className="col-md-4 offset-md-1">
                <img style={{height: '500px'}} src={exceptionalDental} alt=""/>
            </div>
            <div className="col-md-6">
                <h2>Exceptional Dental <br/> Care, On Your Terms</h2>
                <p className="text-secondary mt-5 mr-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos sunt consectetur iste voluptas assumenda repellendus est, nostrum esse possimus doloremque. Consequatur cupiditate neque ipsam deserunt, nesciunt dicta commodi voluptates placeat possimus tenetur eligendi esse numquam quaerat perferendis quasi inventore, officiis molestiae magnam. Harum, explicabo. Culpa, quos? Laborum at nobis dolorum.</p>
                <button className="btn btn-primary mt-5">Learn More</button>
            </div>
        </section>
    );
};

export default ExceptionalDental;
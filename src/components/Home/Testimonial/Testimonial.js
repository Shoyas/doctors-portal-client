import React from 'react';
import './Testimonial.css';
import herry from '../../../asset/images/Ellipse 1.png';
import emma from '../../../asset/images/Ellipse 2.png';
import dellay from '../../../asset/images/Ellipse 3.png';
import Testimonials from '../Testimonials/Testimonials';

const Patient = [
    {
        name: 'Winson Herry',
        from: 'California',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veniam dicta libero quisquam eveniet molestiae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur praesentium culpa sit. Cum voluptates facere ipsam expedita corrupti repudiandae laborum!',
        pic: herry
    },
    {
        name: 'Emma Letus',
        from: 'Florida',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ipsa rem hic!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni amet accusamus ut perferendis animi a adipisci repellendus veritatis optio nulla.',
        pic: emma
    },
    {
        name: 'Winson Dellay',
        from: 'California',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore tenetur velit non provident laboriosam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, illo.',
        pic: dellay
    }
]

const Testimonial = () => {
    return (
        <section className="testimonial-container">
            <div className="container testimonial-top">
                <h5 style={{color: "#1CC7C1"}}>TESTIMONIAL</h5>
                <h2>What's Our Patients <br/> Says</h2>
            </div>
            <div className="row testimonial-card">
                {
                    Patient.map(testimonial => <Testimonials testimonial={testimonial}></Testimonials> )
                }
            </div>

        </section>
    );
};

export default Testimonial;
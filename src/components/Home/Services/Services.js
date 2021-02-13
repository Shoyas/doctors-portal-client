import React from 'react';
import fluoride from '../../../asset/images/fluoride.png';
import cavity from '../../../asset/images/cavity.png';
import whitening from '../../../asset/images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, id.'
    },
    {
        name: 'Cavity Filling',
        img: cavity,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit inventore nemo dolores esse! Totam, recusandae.'
    },
    {
        name: 'Teeth Whitening',
        img: whitening,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.'
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#13D0D1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.img}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
import React from 'react';
import './Blogs.css';

const Blogs = ({blog}) => {
    return (
        <div className="col-md-5 offset-md-1 blogs-border">
            <div className="d-flex">
                <img style={{height: '80px'}} src={blog.img} alt=""/>
                <div style={{'margin-left' : '10px', 'margin-top': '10px'}}>
                    <h6>{blog.name}</h6>
                    <small className="text-secondary">{blog.date}</small>
                </div>
            </div>
            <div>
            <h3>{blog.title}</h3>
            </div>
            <div className="text-secondary">
            <p>{blog.description}</p>
            </div>
        </div>
    );
};

export default Blogs;
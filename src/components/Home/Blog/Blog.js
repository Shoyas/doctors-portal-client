import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import Blogs from '../Blogs/Blogs';
import pic2 from '../../../asset/images/Ellipse 2.png';
import pic3 from '../../../asset/images/Ellipse 3.png';
import './Blog.css';

const BlogDoctor = [
    {
        name: 'Dr. Caudi',
        img: pic2,
        date: '23 April 2019',
        title: '2 times of brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi atque ut rerum quod laboriosam fugiat magni velit ex inventore debitis.',
    },
    {
        name: 'Dr. John Mitchel',
        img: pic3,
        date: '23 July 2019',
        title: 'The tooth cancer taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi atque ut rerum quod laboriosam fugiat magni velit ex inventore debitis.',
    }
]

const Blog = () => {
    return (
        <section className="blog-container">
            <div className="blog-heading text-center">
                <h6 style={{color: "#14D1C8"}}>OUR BLOG</h6>
                <h2>From Our Blog News</h2>
            </div>
            <div className="blog-news row">
                <div className="col-md-3 offset-md-1 blog-border">
                    <div className="blog-patient">
                        <h6>Rashed Kabir</h6>
                        <p>22 Aug 2018</p>
                    </div>
                    <br/>
                    <h5>Check at least a doctor in a year for your teeth</h5>
                    <br/>
                    <br/>
                    <FontAwesomeIcon icon={faLongArrowAltRight} />

                </div>
                <div className="col-md-8 d-flex">
                {
                    BlogDoctor.map(blog => <Blogs blog={blog}></Blogs>)
                }
                </div>
            </div>
        </section>
    );
};

export default Blog;
import React, { useEffect, useState } from 'react';
import './Home.css';
import ServicesPage from '../ServicesPage/ServicesPage';
import Slider from '../Slider/Slider';
import { Link } from 'react-router-dom';

const Home = () => {

    const [services, setServices] = useState([]);

    console.log(services)

    useEffect( () => {
        fetch('services.json')
        .then(response => response.json())
        .then(data => setServices(data))
    },[]);

    return (
        <div>
            <Slider></Slider>
            <div className="all-cards container my-5">
                {
                    services.map((service) => <ServicesPage key = {service.id} service = {service}></ServicesPage>)
                }
            </div>

            <div className="background-image">
                <div className="container quotes p-5">
                    <h3>
                        <blockquote>
                            “No matter how slow you go you're still lapping everyone on the couch.” “To keep the body in good health is a duty… otherwise we shall not be able to keep our mind strong and clear.” “When it comes to eating right and exercising, there is no 'I'll start tomorrow'.” “It never gets easier, you just get better.”
                        </blockquote>
                    </h3>
                </div>
            </div>
            <marquee className="bg-danger text-white py-3" behavior="scroll" direction="left">
                “No matter how slow you go you're still lapping everyone on the couch.” “To keep the body in good health is a duty… otherwise we shall not be able to keep our mind strong and clear.” “When it comes to eating right and exercising, there is no 'I'll start tomorrow'.” “It never gets easier, you just get better.”
            </marquee>
            <div className="free-course-offer  py-5">
                <div className="container">
                    <h1 className='text-warning'>6 months Fitness Course</h1>d
                    <h4 className='text-warning'>Start working on your body today, and with our individual fitness program, already in 90 days you    will see a totally different girl in the mirror.</h4>
                    <button className='btn btn-danger mt-2 rounded-pill'>
                        <Link className='text-white text-decoration-none' to = "/Sign Up">Get Appointment</Link>
                    </button>
                    </div>
            </div>
        </div>
    );
};

export default Home;
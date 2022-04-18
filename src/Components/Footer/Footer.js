import React from 'react';
import logo from '../../images/logo/logo.png';

const Footer = () => {
    return (
        <div className='bg-dark text-white'>
            <div className="container">
            <div className="row py-5">
                    <div className="col-12 col-md-4 col-lg-3">
                        <img style={{width: "100px"}} src={logo} alt="" />
                        <hr />
                        <p>Exercise is any bodily activity that enhances or maintains physical fitness and overall health and wellness.[1]
                        It is performed for various reasons, to aid growth and improve strength, prevent aging, develop muscles and the cardiovascular system, hone athletic skills, weight loss or maintenance.than </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 mt-2">
                        <h3>Quick Links</h3>
                        <p className='text-primary'>About Us</p>
                        <p className='text-primary'>News & Tips</p>
                        <p className='text-primary'>Events</p>
                        <p className='text-primary'>Coachers</p>
                        <p className='text-primary'>Healthy Food</p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 mt-2">
                        <h3>Our Services</h3>
                        <p className='text-primary'>Balance Body & Mind</p>
                        <p className='text-primary'>Nutrition Plan</p>
                        <p className='text-primary'>Fitness & Performance</p>
                        <p className='text-primary'>Weight Loss Program</p>
                        <p className='text-primary'>Cardio Exercise</p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 mt-2">
                        <h3>Get in Touch</h3>
                        <p className='text-primary'>54B, Tailstoi Town 5238 MT, <br></br>
                        La city, IA 522364</p>
                        <p className='text-primary'>07000000</p>
                        <p className='text-primary'>info@fitnesscoach.com</p>
                    </div>
                </div>
                <hr />
                <p className='text-center pb-5'>copyright &#169; 2022 : Al rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
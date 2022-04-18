import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const ServicesPage = (props) => {

    const {header, img, serviceInfo} = props.service;

    return (
        <div className="all-cards mx-auto">
            <div className="cards">
                <img src={img} alt="" />
                <hr />
                <h5>{header}</h5>
                <p>{serviceInfo}</p>
                <button>
                    <Link to = '/checkout'>Book Service</Link>
                </button>
            </div>
        </div>
    );
};

export default ServicesPage;
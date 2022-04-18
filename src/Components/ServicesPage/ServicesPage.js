import React from 'react';
import './ServicePage.css';

const ServicesPage = ({service}) => {

    const {header, img, serviceInfo} = service;


    return (
        <div className="all-cards">
            <div className="cards">
                <img src={img} alt="" />
                <hr />
                <h5>{header}</h5>
                <p>{serviceInfo}</p>
                <button>Book Service</button>
            </div>
        </div>
    );
};

export default ServicesPage;
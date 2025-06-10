import React from "react";
import './Services.css';
import Services_Data from '../../assets/services_data';

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1 style={{ cursor: 'default' }}>My Services</h1>
        </div>
        <div className="services-container">
            {Services_Data.map((service) => (
                <div key={service.s_no} className="services-format">
                    <h3 style={{ cursor: 'default' }}>{service.s_no}</h3>
                    <h2 style={{ cursor: 'default' }}>{service.s_name}</h2>
                    <p style={{ cursor: 'default' }}>{service.s_desc}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Services;
import React from 'react';
import doctors from '../../../images/doctor.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = () => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={doctors} alt=""/>
            <h5 style={{color:" #3A4256"}}>Dr. Caudi</h5>
            <p> <FontAwesomeIcon className="mx-2" style={{color:"#1CC7C1"}} icon={faPhoneAlt}></FontAwesomeIcon>+880-1245861</p>
        </div>
    );
};

export default Doctor;
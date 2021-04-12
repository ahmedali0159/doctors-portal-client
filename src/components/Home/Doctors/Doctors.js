import React from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    return (
        <div>
            <div className="container">
                <h5 className="text-center mb-5" style={{color:"#1CC7C1"}}>Our Doctors</h5>
                <div className="row">
                    <Doctor />
                    <Doctor />
                    <Doctor />
                </div>
            </div>
        </div>
    );
};

export default Doctors;
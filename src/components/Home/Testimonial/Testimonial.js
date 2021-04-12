import React from 'react';


const Testimonial = (props) => {
    const {img,  quote, from, name} = props.testimonial;
    return (
        <div className="col-md-4  card shadow-sm py-4 ">
        <div className="card-body ">
            <p className="card-text text-center">{quote}</p>
        </div>
        <div className="card-footer d-flex  align-items-center">
            <img className="mx-5" src={img} alt="" width="60"/>
            <div>
                <h6 style={{color:"#1CC7C1"}}>{name}</h6>
                <p className="m-0">{from}</p>
            </div>
        </div>
   </div>
    );
};

export default Testimonial;
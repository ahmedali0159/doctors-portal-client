import React from "react";
import "./MakeAppointment.css";
import doctors from "../../../images/doctor.png";

const MakeAppointment = () => {
  return (
    <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctors} alt=""/>
                    </div>
                    <div className="col-md-7  py-5">
                        <h5 style={{color:"#1CC7C1"}} className=" text-uppercase">Appointment</h5>
                        <h1  className="my-4 text-white">Make an Appointment <br/> Today</h1>
                        <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="gradient-btn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default MakeAppointment;

import React from 'react';
import henry from '../../../images/Henry.png';
import aliza from '../../../images/aliza.png';
import ema from '../../../images/ema gomez.png';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'

const testimonialsData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : henry
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    },
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div>
            <h5 style={{color:"#1CC7C1"}}className=" text-uppercase">TESTIMONIAL</h5>
            <h1>What Our Patients <br/> Says </h1>
        </div>
        <div className="row card-deck mt-5">
                    {
                        testimonialsData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Testimonials;
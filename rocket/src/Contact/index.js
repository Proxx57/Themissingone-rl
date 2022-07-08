import React from 'react';
import videoBg from "../assets/Image/Videobg/videobg.mp4";
import Forms from "../components/Forms"



const Contact = () => {
    return(
        <section className='main'>
            <video src={videoBg} autoPlay loop muted/>
            <article className="box-form">
                <Forms/>
            </article>
        </section>
    );
}

export default Contact;
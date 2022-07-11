import React from 'react';
import videoBg from "../assets/Image/Videobg/videobg.mp4";
import { Link } from "react-router-dom";
import TodoList from '../components/importtodo';



const Home = () => {
    return(
        <main>
        <section className='main'>
            <video src={videoBg} autoPlay loop muted playsinline/>
            <article className="button-box">
                <h1 className="pos_1">BIENVENUE, CHERS ROCKETEURS !  LA SAISON 7 COMMENCE . . .</h1>
                <p className='button-1'>
                <Link to="/Contact" className="button-24">INCRIVEZ VOUS !</Link>
                </p>
            </article>
        </section>
        <section className='to-do-list'>
            <TodoList/>
        </section>
        </main>

    );
}

export default Home;
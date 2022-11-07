import React from 'react';
import { Slideshow, Slide, TextoSlide } from './components/Slider4'
import '../assets/styles/Slider4.css'
import img1 from '../assets/img/slider1.png'
import img2 from '../assets/img/slider2.png'
import img3 from '../assets/img/slider3.png'
const SingIn = () => {
    return (
        <main>
            <Titulo>Productos Destacados</Titulo>
            <Slideshow controles={true}>
                <Slide>

                    <img src={img1} alt="" />


                </Slide>
                <Slide>

                    <img src={img2} alt="" />


                </Slide>
                <Slide>

                    <img src={img3} alt="" />


                </Slide>
            </Slideshow>

            <Titulo>Productos Destacados</Titulo>
            <Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
                <Slide>

                    <img src={img1} alt="" />


                </Slide>
                <Slide>

                    <img src={img2} alt="" />


                </Slide>
            </Slideshow>
        </main>
    );
}

export default SingIn;
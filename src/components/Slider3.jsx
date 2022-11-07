import { useRef } from 'react'
import '../assets/styles/Slider3.css'
import img1 from '../assets/img/slider1.png'
import img2 from '../assets/img/slider2.png'
import img3 from '../assets/img/slider3.png'
import styled from 'styled-components'
function Slider3 (){
    const slideshow = useRef(null); //referencia
    
    const sig= () =>{
        if (slideshow.current.children.length > 0){
            console.log('si funciona');
            const primerImg = slideshow.current.children[0];

            slideshow.current.style.transition = `3000ms ease-out all`;
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform= `translateX(-${tamañoSlide}px)`;
            const trasicion=() =>{
                slideshow.current.style.transition='none';
                slideshow.current.style.transform=`translateX(0)`;
            }
            
        }
    }
    const ant= () =>{
        console.log('anterior slide') ; 
     }
    return(
        <main>
           <div >
            <h1> prueba del slider</h1>
            <ContenedorSlide ref={slideshow} className="contenedor">
            <Slide>
                <img src={img1} alt=""/>
            </Slide>
            <Slide>
                <img src={img2} alt=""/>
            </Slide>
            <Slide>
                <img src={img3} alt=""/>
            </Slide>
            </ContenedorSlide>
            <div>
            <button onClick={sig}>sig</button>
            <button onClick={ant}>ant</button>
            </div>
            </div> 
        </main>
    )
}
const Slide = styled.div`
	min-width:100%;
    
    overflow: hidden;
    transition: .3s ease all;
    z-index:10;
    max-height 300px;
    position: relative;
    background: #F0C8E8;
    
    
`;
const ContenedorSlide = styled.div`
	display: flex;
    flex-wrap: nowrap;
    
`;
export default Slider3;
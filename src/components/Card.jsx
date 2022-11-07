import Slider from './Slider';
import img1 from '../assets/img/slider1.png'
import img2 from '../assets/img/slider2.png'
import img3 from '../assets/img/slider3.png'
function Card() {
	const mockImagenes = [{img1},{img2},{img3}];

	return <Slider imagenes={mockImagenes} />;
}

export default Card;
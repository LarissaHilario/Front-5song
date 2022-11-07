import { useState } from "react";

function Slider2() {
    const images = ['slider1.png', 'slider2.png', 'logo.png']
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImg, setSelectedImg] = useState(images[0]);

    const selectNewImg = () => {
        const condition = next ? selectedIndex < images.length : selectedIndex < 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
        setSelectedImg(images[nextIndex]);
        setSelectedIndex(nextIndex);
    };

    const previous = () => {
        selectNewImg(selectedIndex, images, false);
    };
    const next = () => {
        selectNewImg(selectedIndex, images);
    };
    return (
    <>
    <img src={(`../assets/img/${selectedImg}`)}/>
    </>
    )
}
export default Slider2;
import React, { useState } from 'react';



export default function Slider() {
    const SliderImage=[
        {
            url:'https://i.ytimg.com/vi/AgEUTQfxkrI/maxresdefault.jpg',
            caption:'frstImg'
        },
        {
            url:'https://i.ytimg.com/vi/ugqxyyUQvbs/maxresdefault.jpg',
            caption:'ScndImg'
        },
        {
            url:'https://i.ytimg.com/vi/vGtQMxLP4-0/hqdefault.jpg',
            caption:'thrdImg'
        },
        {
            url:'https://i.ytimg.com/vi/FmqK9OlRnv4/maxresdefault.jpg',
            caption:'frthImg'
        }
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % SliderImage.length);
      };
    
      const prevImage = () => {
        setCurrentImageIndex(
          currentImageIndex === 0 ? SliderImage.length - 1 : currentImageIndex - 1
        );}
  return (
    <div>
      <div>
        <div><h1>Best views</h1></div>
        <div id='cont_sl'><div>
      <img src={SliderImage[currentImageIndex]} alt="Photo" />
      <button onClick={prevImage}>Précédent</button>
      <button onClick={nextImage}>Suivant</button>
    </div></div>
      </div>
    </div>
  )
}

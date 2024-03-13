import React, { useState } from 'react';
import prevButtonIcon from "../assets/img/previous-button.png";
import nextButtonIcon from "../assets/img/next-button.png";

// Carousel component: Displays a set of images with next and previous controls
const Carousel = ({ images }) => {
  // currentImageId: State to keep track of the currently displayed image index
  const [currentImageId, setCurrentImageId] = useState(0);

  // showNextImage: Function to navigate to the next image
  const showNextImage = () => {
    setCurrentImageId((prevId) => (prevId + 1) % images.length);
  };

  // showPreviousImage: Function to navigate to the previous image
  const showPreviousImage = () => {
    setCurrentImageId((prevId) => (prevId - 1 + images.length) % images.length);
  };

  // displayCounter: Text displaying the current image position
  const displayCounter = `${currentImageId + 1}/${images.length}`;


return (
    <div className="overlay-carousel">
      <div className="carousel-image-container">
        <img src={images[currentImageId]} alt={`Image ${currentImageId + 1}`} className="carousel-image" />
        {images.length >1 && (
        <>
        <img
          src={prevButtonIcon}
          alt="Bouton précédent"
          onClick={showPreviousImage}
          className="carousel-controls-button prev-button"
        />
        <img
          src={nextButtonIcon}
          alt="Bouton suivant"
          onClick={showNextImage}
          className="carousel-controls-button next-button"
        />
        </>
        )}
      </div>
      {images.length >1 && (
      <div className="carousel-counter">
        <span>{displayCounter}</span>
      </div>
      )}
    </div>
  );
};

export default Carousel;
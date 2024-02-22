import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="carousel-root relative cursor-pointer">
      <div className="carousel carousel-slider" style={{ width: "100%" }}>
        {/* Dots */}
        <ul className="control-dots">
          {images.map((_, index) => (
            <li
              key={index}
              className={`dot ${index === currentIndex ? "selected" : ""}`}
              value={index}
              role="button"
              tabIndex="0"
              aria-label={`slide item ${index + 1}`}
            ></li>
          ))}
        </ul>

        {/* Previous button */}
        <button
          type="button"
          aria-label="previous slide / item"
          className={`control-arrow control-prev ${
            currentIndex === 0 ? "control-disabled" : ""
          }`}
        ></button>

        {/* Slider */}
        <div
          className="slider-wrapper axis-horizontal"
          style={{
            transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
            transitionDuration: "350ms",
          }}
        >
          <ul className="slider animated">
            {images.map((image, index) => (
              <li
                key={index}
                className={`slide ${index === currentIndex ? "selected" : ""}`}
              >
                <div className="relative w-full mainBanner">
                  <img
                    alt={`Banner ${index + 1}`}
                    loading="eager"
                    decoding="async"
                    data-nimg="fill"
                    sizes="100vw"
                    srcSet={`${image} 640w, ${image} 750w, ${image} 828w, ${image} 1080w, ${image} 1200w, ${image} 1920w, ${image} 2048w, ${image} 3840w`}
                    src={image}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  ></img>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Next button */}
        <button
          type="button"
          aria-label="next slide / item"
          className={`control-arrow control-next ${
            currentIndex === images.length - 1 ? "control-disabled" : ""
          }`}
        ></button>
      </div>
    </div>
  );
};

export default ImageSlider;

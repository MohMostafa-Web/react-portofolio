import { useState, useEffect, useCallback } from "react";
import { slidesData } from "../../data";
import "./works.scss";

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const startSlide = useCallback((dir) => {
    dir === "left"
      ? setCurrentIndex(
          currentIndex > 0 ? currentIndex - 1 : slidesData.length - 1
        )
      : setCurrentIndex(
          currentIndex < slidesData.length - 1 ? currentIndex + 1 : 0
        );
  }, [currentIndex]);

  useEffect(() => {
    const autoSlider = setInterval(() => {
      startSlide("right");
    }, 5000);
    return () => {
      clearInterval(autoSlider);
    };
  }, [startSlide]);

  return (
    <section className="works" id="works">
      <div className="slider">
        <div
          className="slides-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
        >
          {slidesData.map((slide) => {
            const { id, icon, title, desc, img } = slide;
            return (
              <div key={id} className="slide">
                <div className="content">
                  <div className="left">
                    <div className="left-container">
                      <div className="img-container">
                        <img src={icon} alt="icon" />
                      </div>
                      <h2>{title}</h2>
                      <p>{desc}</p>
                      <span>projects</span>
                    </div>
                  </div>
                  <div className="right">
                    <img src={img} alt="design" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <img
          src="assets/arrow.png"
          alt="arrow-left"
          className="arrow left"
          onClick={() => startSlide("left")}
        />
        <img
          src="assets/arrow.png"
          alt="arrow-right"
          className="arrow right"
          onClick={() => startSlide("right")}
        />
      </div>
    </section>
  );
};

export default Works;

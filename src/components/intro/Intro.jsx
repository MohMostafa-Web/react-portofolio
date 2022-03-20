import { useRef, useEffect } from "react";
import { init } from "ityped";
import "./intro.scss";

const Intro = () => {
  const spanRef = useRef();

  useEffect(() => {
    init(spanRef.current, {
      showCursor: true,
      strings: ["Front-end Web Developer"],
      loop: true,
      backSpeed: 40,
      backDelay: 1500,
    });
  }, []);

  return (
    <section className="intro" id="intro">
      <div className="left">
        <div className="img-container">
          <img src="assets/man.png" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h3>Hi There, I'm</h3>
          <h2>Mohamed Mostafa</h2>
          <h3>
            Freelance <span ref={spanRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="arrow icon" />
        </a>
      </div>
    </section>
  );
};

export default Intro;

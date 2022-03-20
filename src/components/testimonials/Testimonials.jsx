import { testimonialsData } from "../../data";
import "./testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <div className="container">
        {testimonialsData.map((item) => {
          const { id, name, title, img, icon, desc, featured } = item;

          return (
            <div key={id} className={featured ? "card featured" : "card"}>
              <div className="top">
                <img
                  src="assets/right-arrow.png"
                  className="left"
                  alt="arrow"
                />
                <img className="user" src={img} alt={name} />
                <img className="right" src={icon} alt="icon" />
              </div>
              <div className="center">{desc}</div>
              <div className="bottom">
                <h3>{name}</h3>
                <h4>{title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;

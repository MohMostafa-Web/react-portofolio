import { useState, useEffect } from "react";
import {
  portfolioCategories,
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import "./portfolio.scss";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [portfolioList, setPortfolioList] = useState(featuredPortfolio);

  useEffect(() => {
    if (selected === "web") {
      setPortfolioList(webPortfolio);
    } else if (selected === "mobile") {
      setPortfolioList(mobilePortfolio);
    } else if (selected === "design") {
      setPortfolioList(designPortfolio);
    } else if (selected === "branding") {
      setPortfolioList(contentPortfolio);
    } else {
      setPortfolioList(featuredPortfolio);
    }
  }, [selected]);

  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <ul>
        {portfolioCategories.map((item) => {
          const { id, title, category } = item;

          return (
            <li
              key={id}
              id={category}
              className={
                category === selected ? "category-btn active" : "category-btn"
              }
              onClick={() => setSelected(category)}
            >
              {title}
            </li>
          );
        })}
      </ul>
      <div className="container">
        {portfolioList.map((item) => {
          const { id, title, img } = item;
          return (
            <div key={id} className="item">
              <img src={img} alt={title} />
              <h3>{title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

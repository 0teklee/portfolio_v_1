import Slide from "components/Atom/Slide/Slide";
import Item from "components/Atom/Slide/Item";
import { MutableRefObject, ReactNode, RefObject } from "react";

const PortfolioItem = [
  {
    id: 1,
    img: "/asset/portfolio_1.jpg",
  },
  {
    id: 2,
    img: "/asset/portfolio_2.jpg",
  },
  {
    id: 3,
    img: "/asset/portfolio_3.jpg",
  },
  {
    id: 4,
    img: "/asset/portfolio_4.jpg",
  },
  {
    id: 5,
    img: "/asset/portfolio_5.jpg",
  },
  {
    id: 6,
    img: "/asset/portfolio_6.jpg",
  },
];

const Portfolio = () => {
  return (
    <div id="Portfolio">
      <Slide interval={5000}>
        {PortfolioItem.map((item) => {
          return <Item key={item.id} img={item.img} />;
        })}
      </Slide>
    </div>
  );
};

export default Portfolio;

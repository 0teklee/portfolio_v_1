import Slide from "components/Atom/Slide/Slide";
import Item from "components/Atom/Slide/Item";

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
];

const Portfolio = () => {
  return (
    <Slide interval={5000}>
      {PortfolioItem.map((item) => {
        return <Item img={item.img} />;
      })}
    </Slide>
  );
};

export default Portfolio;

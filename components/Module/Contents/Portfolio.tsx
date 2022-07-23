import Slide from "components/Atom/Slide/Slide";
import Item from "components/Atom/Slide/Item";

const PortfolioItem = [
  { id: 1, img: "/asset/samp.jpg" },
  { id: 2, img: "/asset/samp.jpg", description: "second" },
  { id: 3, img: "/asset/samp.jpg", description: "third" },
];

const Portfolio = () => {
  return (
    <Slide interval={5000}>
      {PortfolioItem.map((item) => {
        return (
          <Item img={item.img} description={item?.description} key={item.id} />
        );
      })}
    </Slide>
  );
};

export default Portfolio;

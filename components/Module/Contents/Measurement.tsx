import Item from "components/Atom/Slide/Item";
import Slide from "components/Atom/Slide/Slide";
import styled from "styled-components";
import MeasurementNote from "./MeasurementNote";

const MeasurementItem = [
  { id: 1, img: "/asset/samp.jpg" },
  { id: 2, img: "/asset/samp.jpg", description: "second" },
  { id: 3, component: <MeasurementNote /> },
];

const Measurement = () => {
  return (
    <Slide interval={15000}>
      {MeasurementItem.map((item) => {
        return (
          <Item
            key={item.id}
            img={item?.img}
            description={item?.description}
            component={item?.component}
          />
        );
      })}
    </Slide>
  );
};

export default Measurement;

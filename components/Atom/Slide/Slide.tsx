import { Carousel } from "react-responsive-carousel";
import { ReactChild } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

interface IProps {
  children: ReactChild[];
  infiniteLoop?: boolean;
  autoPlay?: boolean;
  interval?: number;
  transitionTime?: number;
}

const Slide = ({
  children,
  infiniteLoop = true,
  autoPlay = true,
  interval = 3000,
  transitionTime = 700,
}: IProps) => {
  return (
    <Carousel
      emulateTouch
      infiniteLoop={infiniteLoop}
      autoPlay={autoPlay}
      interval={interval}
      transitionTime={transitionTime}
      useKeyboardArrows
      showThumbs={false}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      stopOnHover
    >
      {children}
    </Carousel>
  );
};

export default Slide;

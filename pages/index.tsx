// eslint-disable-next-line no-unused-vars
import type { NextPage } from "next";
import { sizes } from "styles/theme";
import MobileMainTemplate from "components/Templates/MobileMain/MobileMainTemplate";
import PcMainTemplate from "components/Templates/PcMain/PcMainTemplate";
import useWindowDimensions from "hooks/useWindowDimensions";
import MetaTag from "components/MetaTag";

const Home: NextPage = () => {
  const laptopSize: number = Number(sizes.laptop.slice(0, -2));
  const sizeCheck: boolean = useWindowDimensions()?.width < laptopSize;
  return (
    <>
      <MetaTag
        title="portfolio"
        description="main page"
        img="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/272284490_624309448805798_6040205860195248592_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=hLsDK9rjl9sAX_OcTEg&tn=Wk0NDv3mX9OqGKcP&edm=AGenrX8BAAAA&ccb=7-5&oh=00_AT9fNIDLOc4-5a8JMxSio4PUvxaTHruPya4kJ7AhhjL4iw&oe=62E30C65&_nc_sid=5eceaa"
      />
      {sizeCheck ? <MobileMainTemplate /> : <PcMainTemplate />}
    </>
  );
};

export default Home;

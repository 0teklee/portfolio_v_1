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
      <MetaTag title="Chachi - home" description="main page" />
      {sizeCheck ? <MobileMainTemplate /> : <PcMainTemplate />}
    </>
  );
};

export default Home;

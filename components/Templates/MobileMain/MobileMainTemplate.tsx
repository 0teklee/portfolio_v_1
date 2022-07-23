import Footer from "components/Module/Section/Footer";
import Layout from "../../Layout/Layout";
import MobileMainFullTemplate from "./MobileMainFullTemplate";
import HeaderMobile from "../../Module/Section/HeaderMobile";
import MetaTag from "components/MetaTag";

const MobileMainTemplate = () => {
  return (
    <>
      <HeaderMobile />
      <Layout main={<MobileMainFullTemplate />} />
      <Footer />
    </>
  );
};

export default MobileMainTemplate;

import Footer from "components/Module/Section/Footer";
import Layout from "../../Layout/Layout";
import MobileMainFullTemplate from "./MobileMainFullTemplate";
import HeaderMobile from "../../Module/Section/HeaderMobile";
import FooterMobile from "components/Module/Section/FooterMobile";

const MobileMainTemplate = () => {
  return (
    <>
      <HeaderMobile />
      <Layout main={<MobileMainFullTemplate />} />
      <FooterMobile />
    </>
  );
};

export default MobileMainTemplate;

import Layout from "components/Layout/Layout";
import MobileMainFullTemplate from "./MobileMainFullTemplate";
import HeaderMobile from "components/Module/Section/HeaderMobile";
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

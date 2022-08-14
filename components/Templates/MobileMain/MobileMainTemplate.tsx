import FooterMobile from "components/Module/Section/FooterMobile";
import Layout from "components/Layout/Layout";
import MobileMainFullTemplate from "./MobileMainFullTemplate";
import HeaderMobile from "components/Module/Section/HeaderMobile";

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

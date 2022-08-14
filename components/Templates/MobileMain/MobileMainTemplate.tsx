import FooterMobile from "components/Module/Section/FooterMobile";
import Layout from "components/Layout/Layout";
import HeaderMobile from "components/Module/Section/HeaderMobile";
import MobileMainFullTemplate from "./MobileMainFullTemplate";

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

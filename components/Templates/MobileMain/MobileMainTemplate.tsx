import Footer from "components/Module/Section/Footer";
import Layout from "../../Layout/Layout";
import MobileMainFullTemplate from "./MobileMainFullTemplate";
import MobileHeader from "../../Module/Section/MobileHeader";

const MobileMainTemplate = () => {
  return (
    <>
      <MobileHeader />
      <Layout main={<MobileMainFullTemplate />} />
      <Footer />
    </>
  );
};

export default MobileMainTemplate;

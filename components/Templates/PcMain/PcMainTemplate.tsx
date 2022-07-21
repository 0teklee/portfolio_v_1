import Layout from "components/Layout/Layout";
import Header from "components/Module/Section/Header";
import Footer from "components/Module/Section/Footer";
import PcMainSlideTemplate from "components/Templates/PcMain/PcMainSlideTemplate";
import PcMainSideBarTemplate from "components/Templates/PcMain//PcMainSideBarTemplate";

const PcMainTemplate = () => {
  return (
    <>
      <Header />
      <Layout
        sideBar={<PcMainSideBarTemplate />}
        main={<PcMainSlideTemplate />}
      />
      <Footer />
    </>
  );
};

export default PcMainTemplate;

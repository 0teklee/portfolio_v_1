import InstaPost from "components/Module/Contents/InstaPost";
import Intro from "components/Module/Contents/Intro";
import Resume from "components/Module/Contents/Resume";
import Work from "components/Module/Contents/Work";
import IntroHeader from "components/Module/Section/IntroHeader";
import styled from "styled-components";
import Portfolio from "components/Module/Contents/Portfolio";

const MobileMainFullTemplate = () => {
  return (
    <__Wrapper>
      <IntroHeader />
      <Intro />
      <Portfolio />
      <Resume />
      <Work />
      <InstaPost />
    </__Wrapper>
  );
};

export default MobileMainFullTemplate;

const __Wrapper = styled.div`
  width: 100%;
`;

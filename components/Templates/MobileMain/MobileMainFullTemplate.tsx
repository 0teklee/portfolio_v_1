import Measurement from "components/Module/Contents/Measurement";
import Resume from "components/Module/Contents/Resume";
import styled from "styled-components";
import Portfolio from "../../Module/Contents/Portfolio";

const MobileMainFullTemplate = () => {
  return (
    <__Wrapper>
      <Portfolio />
      <Resume />
      <Measurement />
    </__Wrapper>
  );
};

export default MobileMainFullTemplate;

const __Wrapper = styled.div<{ flex?: boolean }>`
  width: 100%;
  /* border: 1px solid red; */
  ${(props) => (props.flex ? null : null)}
`;

const __Title = styled.h1`
  margin: 1rem 0;
  text-align: center;
  font-family: "Syne", "sans-serif";
  font-size: 3rem;
  font-weight: 600;
`;

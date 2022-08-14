import FooterMobile from "components/Module/Section/FooterMobile";
import HeaderMobile from "components/Module/Section/HeaderMobile";
import InfoTemplate from "components/Templates/Info/InfoTemplate";
import useWindowDimensions from "hooks/useWindowDimensions";
import styled from "styled-components";
import { sizes } from "styles/theme";

const Info = () => {
  const laptopSize: number = Number(sizes.laptop.slice(0, -2));
  const sizeCheck: boolean = useWindowDimensions()?.width < laptopSize;

  return (
    <__Wrapper>
      {sizeCheck ? <HeaderMobile /> : null}
      <InfoTemplate />
      {sizeCheck ? <FooterMobile /> : null}
    </__Wrapper>
  );
};

const __Wrapper = styled.div``;

export default Info;

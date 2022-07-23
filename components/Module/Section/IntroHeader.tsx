import styled from "styled-components";
import { theme } from "styles/theme";

function IntroHeader() {
  return (
    <__Container>
      <__FlexC>
        <__Title>Hello This is Me</__Title>
        <__Text>Model / Actress</__Text>
        <__Btn>CONTACT</__Btn>
      </__FlexC>
      <__FlexSB>
        <__SmallText>BASED IN SEOUL</__SmallText>
        <__SmallText>2022 ALL RIGHTS RESERVED</__SmallText>
      </__FlexSB>
    </__Container>
  );
}

export default IntroHeader;

const __Container = styled.div`
  ${theme.displayFlex("center", "center", "column")}
  margin-top: 2.5rem;
  width: 100%;
  height: 700px;
  position: relative;
  background-image: url("/asset/intro.jpg");
  background-size: cover;
`;

const __FlexC = styled.div`
  ${theme.displayFlex("center", "center", "column")}
  margin-top: auto;
`;

const __FlexSB = styled.div`
  ${theme.displayFlex(undefined, "space-between")}
  margin-top: auto;
  padding: 0.5rem;
  width: 100%;
`;
const __Title = styled.h1`
  margin-bottom: 2rem;
  font-family: "Cormorant";
  font-size: 8rem;
  font-weight: 900;
  color: #fff;
  text-align: center;
`;

const __Text = styled.div`
  margin-bottom: 2rem;
  font-family: "Syne";
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
`;

const __SmallText = styled.div`
  margin-bottom: 1rem;
  font-family: "Ubuntu";
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
`;

const __Btn = styled.button`
  all: unset;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid #fff;
  border-radius: 30px;
  color: #fff;
  font-family: "Syne";
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #00000083;
  }
`;

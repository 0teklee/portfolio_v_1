import Item from "components/Atom/Slide/Item";
import Slide from "components/Atom/Slide/Slide";
import Title from "components/Atom/Title";
import styled from "styled-components";

const Work = () => {
  return (
    <__Wrapper>
      <Title>Work</Title>
      <Slide>
        <Item description="123" />
        <Item description="456" />
      </Slide>
      <__Text>UPLOAD SOON</__Text>
    </__Wrapper>
  );
};

export default Work;

const __Wrapper = styled.div`
  padding: 3rem;
  background: #000;
`;

const __Text = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-family: "Cormorant";
`;

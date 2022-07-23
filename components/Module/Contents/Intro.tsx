import styled from "styled-components";

const Intro = () => {
  return (
    <__Wrapper>
      <__Text>
        Hi my name is Chachi. I'm model / actress working in South Korea, Seoul.
      </__Text>
    </__Wrapper>
  );
};

export default Intro;

const __Wrapper = styled.div`
  padding: 5rem 1rem;
  background: #000;
`;

const __Text = styled.div`
  font-size: 1.5rem;
  font-family: "Cormorant";
  line-height: 1.6;
  color: #fff;
`;

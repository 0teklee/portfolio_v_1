import Title from "components/Atom/Title";
import Link from "next/link";
import styled from "styled-components";

const InstaPost = () => {
  return (
    <__Wrapper>
      <Title marginBottom="0.5rem">Instagram</Title>
      <__A href="https://www.instagram.com/lesyeoux">@lesyeoux</__A>
    </__Wrapper>
  );
};

export default InstaPost;

const __Wrapper = styled.div`
  background: #000;
  padding: 3rem;
  width: 100%;
  height: 100%;
`;

const __A = styled.a`
  color: #fff;
  font-family: "Cormorant";
  font-size: 1rem;
  cursor: pointer;
`;

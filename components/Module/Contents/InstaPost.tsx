import Title from "components/Atom/Title";
import styled from "styled-components";
import instaData from "public/asset/InstaPost";
import Slide from "components/Atom/Slide/Slide";
import Item from "components/Atom/Slide/Item";

const InstaPost = () => {
  const igLink = "https://www.instagram.com/lesyeoux";
  return (
    <__Wrapper>
      <Title marginBottom="0.5rem">Instagram</Title>
      <__A href={igLink}>@lesyeoux</__A>
      <__SlideWrapper>
        <Slide interval={8000}>
          {instaData.map((post) => (
            <Item key={post.id} img={post.url} url={igLink} />
          ))}
        </Slide>
      </__SlideWrapper>
    </__Wrapper>
  );
};

export default InstaPost;

const __Wrapper = styled.div`
  background: #000;
  padding: 2rem;
  width: 100%;
  height: 100%;
`;

const __A = styled.a`
  margin-bottom: 12rem;
  color: #fff;
  font-family: "Cormorant";
  font-size: 1rem;
  cursor: pointer;
`;

const __SlideWrapper = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  cursor: pointer;
`;

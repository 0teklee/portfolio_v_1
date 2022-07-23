import styled from "styled-components";
import { theme } from "styles/theme";
import Title from "components/Atom/Title";

const CommercialItem = [
  "Samsung",
  "Coca Cola",
  "Ader Error",
  "April Skin",
  "COSRX",
  "Klaris",
  "Axis Skin",
];

const ActingItem = ["Suriname", "Somebody"];

const Resume = () => {
  return (
    <__Container>
      <Title>Experience</Title>
      <__TitleSub>Commercial</__TitleSub>
      <__Wrapper>
        <__Ul>
          {CommercialItem.map((item) => (
            <__Li>
              <__SpanBold>{item}</__SpanBold>
            </__Li>
          ))}
        </__Ul>
      </__Wrapper>
      <__TitleSub>Acting</__TitleSub>
      <__Wrapper>
        <__SpanBold>Netflix Original</__SpanBold>
        <__Ul>
          {ActingItem.map((item) => (
            <__Li>
              <__SpanBold>{item}</__SpanBold>
              <__Span>extra</__Span>
            </__Li>
          ))}
        </__Ul>
      </__Wrapper>
    </__Container>
  );
};

export default Resume;

const __Container = styled.div`
  padding: 3rem;
  width: 100%;
  height: 100%;
  background: #000;
`;

const __Wrapper = styled.div`
  margin: 2rem;
  padding-left: 1rem;
`;

const __TitleSub = styled.h2`
  margin-bottom: 1rem;
  padding-left: 1rem;
  font-family: "Syne", "sans-serif";
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
`;

const __Ul = styled.ul``;

const __Li = styled.li`
  list-style: none;
`;

const __SpanBold = styled.span`
  margin-right: 1rem;
  padding-bottom: 1rem;
  font-family: "Syne", "sans-serif";
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
`;

const __Span = styled.span`
  font-family: "Syne", "sans-serif";
  font-size: 1rem;
  font-weight: 300;
  color: #fff;
`;

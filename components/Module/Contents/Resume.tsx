import styled from "styled-components";
import { theme } from "styles/theme";

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
      <__Title>Experience</__Title>
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
        <__Ul>
          {ActingItem.map((item) => (
            <__Li>
              <__SpanBold>Netflix Drama {item}</__SpanBold>
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
`;

const __Wrapper = styled.div`
  margin: 2rem;
  padding-left: 1rem;
`;

const __Title = styled.h1`
  margin-bottom: 3rem;
  font-family: "Syne", "sans-serif";
  font-size: 1.3rem;
  font-weight: 900;
`;

const __TitleSub = styled.h2`
  margin-bottom: 1rem;
  padding-left: 1rem;
  font-family: "Syne", "sans-serif";
  font-size: 1.1rem;
  font-weight: 800;
`;

const __Ul = styled.ul``;

const __Li = styled.li`
  list-style: none;
`;

const __SpanBold = styled.span`
  margin-right: 1rem;
  font-family: "Syne", "sans-serif";
  font-size: 1rem;
  font-weight: 600;
`;

const __Span = styled.span`
  font-family: "Syne", "sans-serif";
  font-size: 1rem;
  font-weight: 300;
`;

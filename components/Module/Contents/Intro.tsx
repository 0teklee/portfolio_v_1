import styled from "styled-components";

const Intro = () => {
  return (
    <__Wrapper>
      <__Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
        nulla purus. Aenean at mauris egestas, malesuada nibh quis, placerat
        erat. Nunc vehicula, sapien et dictum maximus, lacus augue mollis erat,
        vitae ullamcorper justo ante in nulla. Suspendisse tortor nisi, tempor
        luctus consectetur ut, suscipit quis ligula. Nulla blandit hendrerit
        mollis.{" "}
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

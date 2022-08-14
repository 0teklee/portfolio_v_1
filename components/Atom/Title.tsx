import { ReactNode } from "react";
import styled from "styled-components";

const Title = ({
  children,
  marginBottom,
  padding,
}: {
  children: ReactNode;
  marginBottom?: string;
  padding?: string;
}) => {
  return (
    <__Title marginBottom={marginBottom} padding={padding}>
      {children}
    </__Title>
  );
};

export default Title;

const __Title = styled.h1<{ padding?: string; marginBottom?: string }>`
  padding: ${(props) => (props.padding ? props.padding : 0)};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "3rem"};
  font-size: 3rem;
  font-family: "Cormorant", "Serif";
  color: #fff;
`;

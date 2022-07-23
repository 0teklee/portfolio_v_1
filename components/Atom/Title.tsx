import { ReactNode } from "react";
import styled from "styled-components";

const Title = ({
  children,
  marginBottom,
}: {
  children: ReactNode;
  marginBottom?: string;
}) => {
  return <__Title marginBottom={marginBottom}>{children}</__Title>;
};

export default Title;

const __Title = styled.h1<{ marginBottom?: string }>`
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "3rem"};
  font-size: 3rem;
  font-family: "Cormorant", "Serif";
  color: #fff;
`;

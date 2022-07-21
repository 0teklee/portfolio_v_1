import styled from "styled-components";
import { ReactNode } from "react";

interface IProps {
  main: ReactNode;
  sideBar?: ReactNode;
}

const Layout = (props: IProps) => {
  const { sideBar, main } = props;
  return (
    <__Layout>
      {sideBar ? <__Left>{sideBar}</__Left> : null}
      <__Main>{main}</__Main>
    </__Layout>
  );
};

export default Layout;

const __Layout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
`;

const __Left = styled.div`
  flex: 0.5;
  width: 300px;
`;

const __Main = styled.div`
  flex: 2;
`;

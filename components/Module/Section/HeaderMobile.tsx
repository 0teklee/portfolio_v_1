import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";
import { MenuModal } from "../Modal/MenuModal";

const MobileHeader = () => {
  const [modal, setModal] = useState(false);

  const handleTitle = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleMenu = () => {
    setModal((prev) => !prev);
  };

  return (
    <__Container>
      <__Wrapper>
        <__Title onClick={handleTitle}> Chachi</__Title>
        <__Button onClick={handleMenu}>
          <Image
            src="/asset/menu-30.png"
            alt="menu"
            width="30px"
            height="30px"
          />
        </__Button>
      </__Wrapper>
      <__ModalWrapper>{modal && <MenuModal />}</__ModalWrapper>
    </__Container>
  );
};

export default MobileHeader;

const __Container = styled.div`
  position: fixed;
  width: 100%;
  padding: 0.5rem 1rem;
  background: #000;
  z-index: 999;
`;

const __Wrapper = styled.div`
  ${theme.displayFlex(undefined, "space-between", "row")}
  position: relative;
`;

const __ModalWrapper = styled.div`
  position: absolute;
  top: 3.6rem;
  right: 0;
  z-index: 99;
`;

const __Title = styled.h1`
  color: #fff;
  font-family: "Playfair Display";
  font-size: 2rem;
  font-weight: 900;
  cursor: pointer;
`;

const __Button = styled.button`
  all: unset;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

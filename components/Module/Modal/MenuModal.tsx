import { useEffect } from "react";
import styled from "styled-components";

const MenuItem = [
  { id: "Contact", path: "/info" },
  { id: "Work", path: "/info" },
  { id: "Info", path: "/info" },
  { id: "Info", path: "/info" },
];

export const MenuModal = () => {
  return (
    <__Wrapper>
      {MenuItem.map((item) => (
        <__Menu>{item.id}</__Menu>
      ))}
    </__Wrapper>
  );
};

const __Wrapper = styled.div``;

const __Menu = styled.div`
  padding: 1rem;
  color: #fff;
  text-align: center;
  font-family: "Syne";
  font-size: 1.5rem;
  background: #232323a1;
  &:hover {
    background: #545454a0;
  }
  cursor: pointer;
`;

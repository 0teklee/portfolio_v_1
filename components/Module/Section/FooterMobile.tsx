import Router from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

function FooterMobile() {
  const router = Router;
  const [path, setPath] = useState("");

  const handleFooterClick = () => {
    if (path === "/info") router.push("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setPath(router.pathname);
  }, []);

  return (
    <__Wrapper>
      <__Button onClick={handleFooterClick}>
        {path && path === "/" ? "TOP" : "HOME"}
      </__Button>
    </__Wrapper>
  );
}

export default FooterMobile;

const __Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1.5rem 0;

  background: #000;
  color: #fff;
`;

const __Button = styled.button`
  all: unset;
  cursor: pointer;

  font-family: "Syne";
  font-weight: 600;
  font-size: 1.5rem;
`;

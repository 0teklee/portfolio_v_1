import styled from "styled-components";
import Image from "next/image";
import { ReactNode } from "react";

interface IProps {
  img?: string;
  description?: string;
  component?: ReactNode;
  url?: string;
}

const Item = ({ img, description = "", url, component }: IProps) => {
  const handleUrl = (url: string | undefined) => {
    if (!url) return;
    window.open(url);
  };
  return (
    <__Wrapper onClick={() => handleUrl(url)}>
      {img && (
        <Image
          src={img}
          alt={description}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
      )}
      {description && <__Description>{description}</__Description>}
      {component}
    </__Wrapper>
  );
};

export default Item;

const __Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const __Description = styled.p`
  font-family: Syne;
  font-weight: 300;
`;

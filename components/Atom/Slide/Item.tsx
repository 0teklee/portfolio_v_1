import styled from "styled-components";
import Image from "next/image";

interface IProps {
  img: string;
  description?: string;
}

const Item = ({ img, description = "" }: IProps) => {
  return (
    <__Wrapper>
      <Image
        src={img}
        alt={description}
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="contain"
      />
      {description && <__Description>{description}</__Description>}
    </__Wrapper>
  );
};

export default Item;

const __Wrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
`;

const __Description = styled.p`
  font-family: Syne;
  font-weight: 300;
`;

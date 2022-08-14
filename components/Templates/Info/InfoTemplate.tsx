import Title from "components/Atom/Title";
import styled from "styled-components";
import { sizes } from "styles/theme";

const InfoTemplate = () => {
  const contactItem = [
    { field: "e-mail", value: "chachigw114@gmail.com" },
    { field: "instagram", value: "@lesyeoux" },
  ];

  const measureItem = [
    { field: "B", value: "99" },
    { field: "W", value: "30" },
    { field: "H", value: "99" },
    { field: "Height", value: "170cm" },
    { field: "Weight", value: "xxkg" },
  ];

  return (
    <__Wrapper>
      <Title padding="140px 0 1rem 2rem">Info</Title>
      <__Divider />
      <Title padding="0 0 1rem 2rem">Contact</Title>
      <__ContactWrapper>
        {contactItem.map((item) => (
          <__ContentWrapper key={item.field}>
            <span className="field">{item.field}</span>
            <span className="value">{item.value}</span>
          </__ContentWrapper>
        ))}
      </__ContactWrapper>
      <Title padding="5rem 0 1rem 2rem">Measurement</Title>
      <__MeasureWrapper>
        {measureItem.map((item) => (
          <__ContentWrapper key={item.field}>
            <span className="field">{item.field}</span>
            <span className="value">{item.value}</span>
          </__ContentWrapper>
        ))}
      </__MeasureWrapper>
    </__Wrapper>
  );
};

export default InfoTemplate;

const __Wrapper = styled.div`
  width: 100%;
  padding-bottom: 30%;
  background: #000;
  color: #fff;
`;

const __Divider = styled.div`
  max-width: ${sizes.laptop};
  margin: 1rem 3rem 2rem 3rem;
  border: 1px solid #fff;
  color: #fff;
`;

const __ContactWrapper = styled.div`
  max-width: ${sizes.laptop};
`;

const __MeasureWrapper = styled(__ContactWrapper)`
  padding-right: 3rem;

  .field {
    font-size: 1.5rem;
  }

  .value {
    font-family: "Playfair Display";
  }
`;

const __ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0 4rem 0 3rem;

  line-height: 1.6;
  font-family: "Cormorant";
  font-size: 1.3rem;

  .field {
    margin-bottom: 1rem;
    margin-right: 3rem;
    font-weight: 700;
  }

  .value {
    font-weight: 300;
  }
`;

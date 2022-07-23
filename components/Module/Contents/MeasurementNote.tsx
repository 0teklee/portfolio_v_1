import styled from "styled-components";
import { theme } from "styles/theme";

const MesurementItem = [
  { key: "Height", value: "170cm" },
  { key: "Weight", value: "???" },
  { key: "B", value: "???" },
  { key: "W", value: "???" },
  { key: "H", value: "???" },
];

function MeasurementNote() {
  return (
    <__Container>
      <__Title>Measurement</__Title>
      {MesurementItem.map((item) => (
        <__Wrapper>
          <__Key>{item.key}</__Key>
          <__Value>{item.value}</__Value>
        </__Wrapper>
      ))}
    </__Container>
  );
}

export default MeasurementNote;

const __Container = styled.div`
  ${theme.displayFlex(undefined, undefined, "column")}
  width: 100%;
  height: 100%;
`;

const __Wrapper = styled.div`
  margin: 0.5rem 0;
`;

const __Title = styled.h1`
  margin-bottom: 3rem;
  font-family: "Playfair Display", "sans-serif";
  font-size: 1.5rem;
  font-weight: 600;
`;

const __Key = styled.span`
  margin-right: 1rem;
  font-family: "Playfair Display", "sans-serif";
  font-size: 1rem;
  font-weight: bold;
`;

const __Value = styled.span`
  font-family: "Playfair Display", "sans-serif";
  font-size: 1rem;
  font-weight: 500;
`;

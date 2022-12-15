import styled from "styled-components";

export const DateText = styled.div`

`;

export const DateContainer = styled.div`
  color: ${(props) => props.isNight ? '#FFFCFF' : '#070707'};
`;

export const CurrentDateBlock = styled.div`
  font-family: 'Questrial';
  font-size: 30px;
`;

export const CurrentTimeBlock = styled.div`
  font-family: 'Questrial';
  font-size: 30px;
`;
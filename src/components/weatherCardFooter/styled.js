import styled from "styled-components";

export const FooterContainer = styled.div`
  margin: auto 0 0;
  height: fit-content;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const FooterUnit = styled.div`
  display: flex;
`;

export const FooterImage = styled.img`
  height: 30px;
  margin-right: 10px;
`;

export const FooterText = styled.span`
  font-family: 'Questrial';
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  color: ${(props) => props.isNight ? '#FFFCFF' : '#070707'};
  text-align: center;
`;
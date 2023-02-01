import styled from "styled-components";

export const CityName = styled.h2`
  font-family: 'Questrial';
  font-size: 35px;
  color: #070707;
  opacity: 1;
  animation: 1s 1 show;

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const HomeContainer = styled.div`
  width: 100%;
`;
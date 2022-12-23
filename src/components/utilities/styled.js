import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const SpinnerContainer = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  margin: -100px 0 0 -100px;
  width: 200px;
  height: 200px;
  svg {
    animation: rotate 2s linear infinite;
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;
    width: 50px;
    height: 50px;
    
    & circle {
      stroke: #999;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
    
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
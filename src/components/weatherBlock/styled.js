import { property } from "lodash";
import styled from "styled-components";

export const WeatherBlockContainer = styled.div`
  padding: 40px 0;
`;

export const TemperatureBlock = styled.div`
  display: flex;
`;

export const MainTemperature = styled.div`
  color: ${(props) => props.isNight ? '#FFFCFF' : '#070707'};
  font-family: 'Questrial';
  font-size: 70px;
  line-height: 100px;
  height: 100px;
  font-weight: 400;
`;

export const WeatherIcon = styled.img`
	height: 100px;
`;
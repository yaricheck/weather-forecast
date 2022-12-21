import React from "react";
import { WeatherBlockContainer, TemperatureBlock, MainTemperature, WeatherIcon } from "./styled";

const WeatherBlock = (props) => {
  const { main: { temp }, icon, isNight } = props;

  return (
    <WeatherBlockContainer>
      <TemperatureBlock>
        <MainTemperature isNight={isNight}>{temp} °C</MainTemperature>
        <WeatherIcon src={`icons/${icon}.svg`}/>
      </TemperatureBlock>
    </WeatherBlockContainer>
  );
}

export default WeatherBlock;
import React from "react";
import DateTime from "../dateTime";
import WeatherBlock from "../weatherBlock";
import WeatherCardFooter from "../weatherCardFooter";
import WeatherChart from "../weatherChart";
import { WeatherCardContainer, Flex } from "./styled";

const WeatherCard = (props) => {
  console.log(props.cityData);
  const { cityData: { sys: { sunrise, sunset }, main, main: { pressure, humidity }, wind: { speed }, weather, weather: [{ icon }], coord } } = props;
  const dateTime = new Date().getTime();
  const isNight = sunset * 1000 < dateTime || sunrise * 1000 > dateTime;
  const footerData = {
    pressure: {
      value: pressure,
      units: ' hPa',
    },
    humidity: {
      value: humidity,
      units: '%',
    },
    wind: {
      value: speed,
      units: ' m/sec',
    },
  };

  return (
    <WeatherCardContainer isNight={isNight}>
      <Flex>
        <DateTime dateTime={dateTime} isNight={isNight} />
      </Flex>
      <WeatherBlock main={main} weather={weather} icon={icon} isNight={isNight}/>
      <WeatherChart isNight={isNight} latitude={coord.lat} longitude={coord.lon} />
      <WeatherCardFooter isNight={isNight} footerData={footerData}/>
    </WeatherCardContainer>
  );
}

export default WeatherCard;
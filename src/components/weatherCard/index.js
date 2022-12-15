import React from "react";
import DateTime from "../dateTime";
import WeatherCardFooter from "../weatherCardFooter";
import { WeatherCardContainer } from "./styled";

const WeatherCard = (props) => {
  const { cityData: { sys: { sunrise, sunset }, main: { pressure, humidity }, wind: { speed }} } = props;
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
      <DateTime dateTime={dateTime} isNight={isNight} />
      <WeatherCardFooter isNight={isNight} footerData={footerData}/>
    </WeatherCardContainer>
  );
}

export default WeatherCard;
import React from "react";
import WeatherCard from "../../components/weatherCard";
import { CityName, HomeContainer } from './styled';

function Home(props) {
  const { cityData, cityData: { name, sys: { country } } } = props;
  console.log(props);
  return (
    <HomeContainer>
      <CityName>{name}, {country}</CityName>
      <WeatherCard cityData={cityData} />
    </HomeContainer>
  );
}

export default Home;

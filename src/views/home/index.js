import React from "react";
import WeatherCard from "../../components/weatherCard";
import { CityName, HomeContainer } from './styled';

function Home(props) {
  const { cityData } = props;
  console.log(props);
  return (
    <HomeContainer>
      <CityName>{cityData.name}, {cityData.sys.country}</CityName>
      <WeatherCard cityData={cityData} />
    </HomeContainer>
  );
}

export default Home;

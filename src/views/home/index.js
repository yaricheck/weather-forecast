import React from "react";
import { CityName } from './styled';

function Home(props) {
  const { cityData } = props;
  return (
    <CityName>{cityData.name}</CityName>
  );
}

export default Home;

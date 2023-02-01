import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/header";
import Spinner from "./components/utilities/spinner";
import { getPosition } from "./services/geolocationService";
import { loadStartupData } from "./services/loadService";
import { getCityDataByName } from "./services/searchService";
import Home from "./views/home";
import News from "./views/news";

const Main = styled.main`
  display: flex;
  width: 1024px;
  height: calc(100vh - 200px);
  padding: 64px 50px;
  margin: auto;
  overflow-y: hidden;
`;

function App() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const [cityData, setCityData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const position = await getPosition();
      setPosition(position);
      setTimeout(() => {
        loadStartupData(position.coords)?.then((data) => setCityData(data)).catch((e) => setError(e));
      }, 1000);
    }
    getData();
  }, [])

  const handleSearch = (cityName) => {
    getCityDataByName(cityName).then((data) => setCityData(data), (e) => setError(e));
  }

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <Main>
        {cityData ? 
          <Routes>
            <Route element={<Home error={error} cityData={cityData}/>} path="/" />
            <Route element={<News countryCode={cityData.sys.country} setError={setError}/>} path="details" />
          </Routes> :
          <Spinner />
        }
      </Main>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { loadForecastByCoords } from '../../services/loadService';
import Spinner from '../utilities/spinner';
import { toTimeFormat } from '../../utilities/converters';
import WeatherChart from './chart';

const WeatherChartBlock = (props) => {
  const { longitude, latitude, isNight } = props;
  const [forecast, setForecast] = useState(null);
  const coords = { latitude, longitude };
  useEffect(() => {
    loadForecastByCoords(coords).then((response) => setForecast(response)).catch(() => {});
  }, []);

  return forecast ? <WeatherChart isNight={isNight} forecast={forecast} /> : <Spinner/>;
}
export default WeatherChartBlock;
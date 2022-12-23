import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { loadForecastByCoords } from '../../services/loadService';
import Spinner from '../utilities/spinner';
import { toTimeFormat } from '../../utilities/converters';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
);

const WeatherChart = (props) => {
  const { forecast, isNight } = props;

  const chartElements = forecast.list.slice(forecast.cnt - 9);
  const labels = chartElements.map((element) => {
    const date = new Date(element.dt * 1000);
    return `${toTimeFormat(date.getHours())}:${toTimeFormat(date.getMinutes())}`;
  });
  const dataPerTime = chartElements.map((element) => element.main.temp);
  const data = {
    labels,
    datasets: [
      {
        data: dataPerTime,
        borderColor: 'rgba(247, 179, 43, 1)',
        backgroundColor: 'rgba(247, 179, 43, 0.5)',
        fill: true
      },
    ],
  };

  const gridColor = isNight ? '#FFFCFF' : '#070707'; 
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          color: gridColor,
          borderColor: gridColor,
        },
        border: {
          color: gridColor,
        },
        ticks: {
          color: gridColor,
        },
      },
      y: {
        grid: {
          display: false,
          color: gridColor,
          borderColor: gridColor,
        },
        border: {
          color: gridColor,
        },
        ticks: {
          color: gridColor,
        },
      },
    },
  };
  return forecast ? <Line height={'50px'} options={options} data={data} /> : <Spinner/>;
}
export default WeatherChart;
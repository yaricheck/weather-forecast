import axios from "axios"

const dataInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather/',
  timeout: 10000,
  method: 'get',
  headers: {},
  params: {
    units: 'metric',
    appid: '7cb3615592b8990617f9eb6526e69174',
  },
});

export const getCityDataByCoords = async (coords) => {
  const response = await dataInstance({
    params: {
      lat: coords.latitude,
      lon: coords.longitude,
    },
  });
  return response.data;
} ;

export const getCityDataByName = async (name) => {
  const response = await dataInstance({
    params: {
      q: name,
    },
  });
  return response.data;
};

const weatherInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/forecast/',
  timeout: 10000,
  method: 'get',
  headers: {},
  params: {
    units: 'metric',
    appid: '7cb3615592b8990617f9eb6526e69174',
  },
});

export const getForecastByCoords = async (coords) => {
  const response = await weatherInstance({
    params: {
      lat: coords.latitude,
      lon: coords.longitude,
    },
  });
  return response.data;
};

const topNewsInstance = axios.create({
  baseURL: 'https://newsapi.org/v2/top-headlines',
  timeout: 10000,
  method: 'get',
  headers: {},
  params: {
    apiKey: '8316e5240e7a4a049740b395e0659e6e',
  },
});

export const getNewsByCountryCode = async (countryCode) => {
  const response = await topNewsInstance({
    params: {
      country: countryCode,
    },
  });
  return response.data;
};
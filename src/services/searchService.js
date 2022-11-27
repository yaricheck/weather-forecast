import axios from "axios"

const axiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather/',
  timeout: 10000,
  method: 'get',
  headers: {}, //lat=44.34&lon=10.99&appid={API key}
  params: {
    units: 'metric',
    appid: '7cb3615592b8990617f9eb6526e69174',
  },
});

export const getCityDataByPosition = async (position) => {
  const response = await axiosInstance({
    params: {
      lat: position.latitude,
      lon: position.longitude,
    },
  });
  return response.data;
} ;

export const getCityDataByName = async (name) => {
  const response = await axiosInstance({
    params: {
      q: name,
    },
  });
  return response.data;
};
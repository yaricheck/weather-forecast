import { getCityDataByName, getCityDataByCoords, getForecastByCoords } from "./searchService";

export const loadStartupData = async (coords) => {
  try {
    return getCityDataByCoords(coords);
  } catch (error) {
    return getCityDataByName('Minsk');
  } 
};

export const loadForecastByCoords = async (coords) => {
  try {
    return getForecastByCoords(coords);
  } catch (error) {
    return getCityDataByName('Minsk');
  }
}
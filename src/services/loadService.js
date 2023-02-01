import { getCityDataByName, getCityDataByCoords, getForecastByCoords, getNewsByCountryCode } from "./searchService";

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

export const loadStartupDataForNews = async (countryCode) => {
  try {
    const response = await getNewsByCountryCode(countryCode);
    if (response.totalResults !== 0) return response;
    return getNewsByCountryCode('US');
  } catch (error) {
    return getNewsByCountryCode();
  }
}
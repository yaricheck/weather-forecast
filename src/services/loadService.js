import { getCityDataByName, getCityDataByPosition } from "./searchService";

export const loadStartupData = () => {
  if (window.location.protocol === 'https:' && window.navigator.geolocation){
    const position = window.navigator.geolocation.getCurrentPosition();
    return getCityDataByPosition(position);
  }
  return getCityDataByName('Minsk');
};

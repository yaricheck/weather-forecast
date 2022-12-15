import { getPosition } from "./geolocationService";
import { getCityDataByName, getCityDataByPosition } from "./searchService";

export const loadStartupData = async () => {
  try {
    const position = await getPosition();
    return getCityDataByPosition(position);
  } catch (error) {
    return getCityDataByName('Minsk');
  } 
};

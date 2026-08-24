import axios from "axios";
import {
  sendWeatherRequest,
  receiveWeatherResponce,
  receiveWeatherError,
} from "./weatherAction";

const API_KEY = "dd71cffbc1084eed2217d1f5eb1c7fae";

export const fetchWeather = ({ query, searchType }) => {
  return async (dispatch) => {
    dispatch(sendWeatherRequest({ query, searchType })); 

    try {
      const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
      let url;

      if (searchType === "coords") {
        const [lat, lon] = query.split(",").map((s) => s.trim());
        url = `${baseUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
      } else {
        url = `${baseUrl}?q=${encodeURIComponent(query)}&units=metric&appid=${API_KEY}`;
      }

      const res = await axios.get(url);
      dispatch(receiveWeatherResponce(res.data));
      console.log(res)
    } catch (error) {
      dispatch(
        receiveWeatherError(error.response?.data?.message || error.message)
      );
    }
  };
};
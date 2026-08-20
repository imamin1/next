import axios from "axios"
import { RECEIVE_WEATHER_ERROR, RECEIVE_WEATHER_RESPONSE, SEND_WEATHER_REQUEST } from "./weatherTypes"

export const sendWeatherRequest= (query)=>{
    return {
        type : SEND_WEATHER_REQUEST,
        payload : query
    }
}


export const receiveWeatherResponce= (data)=>{
    return {
        type : RECEIVE_WEATHER_RESPONSE,
        payload : data
    }
}



export const receiveWeatherError= (error)=>{
    return {
        type : RECEIVE_WEATHER_ERROR,
        payload : error
    }
}

const getWeatherInfo = (query) => {
    return dispatch=>{
        dispatch(sendWeatherRequest());
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=dd71cffbc1084eed2217d1f5eb1c7fae`)
        .then(res=>{
            dispatch(receiveWeatherResponce(res.data))
        }).catch(error=>{
            dispatch(receiveWeatherError(error.message))
        })
    }
}
export default getWeatherInfo;
import axios from "axios";
import { SEND_WEATHER_REQUEST } from "./weatherTypes";
import { call, put, takeEvery } from "redux-saga/effects";
import { receiveWeatherError, receiveWeatherResponce } from "./weatherAction";


const getWeatherRequest = (query ) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=dd71cffbc1084eed2217d1f5eb1c7fae`)
}

function* handleGetWeather(action){
    try {
        const res = yield call(getWeatherRequest , action.payload)
        yield put(receiveWeatherResponce(res.data))
    } catch (error) {
        yield put(receiveWeatherError(error.message))
    }
}

export function* watcherSaga (){
    yield takeEvery(SEND_WEATHER_REQUEST ,handleGetWeather )
}
import  fruitReducer  from "./fruit/fruitReducer";
import {createStore} from "redux";
const store = createStore(fruitReducer)

export default store;
import {
    SEND_REQUEST,
    RECEIVE_RESPONSE,
    RECEIVE_ERROR,
    ADD_ITEM,
    EDIT_ITEM,
    DELETE_ITEM,
  } from "./rType";
  
  const entryInit = { loading: false, data: [], error: "" };
  
  const managment = (state = {}, action) => {
    const { key } = action;
    switch (action.type) {
      case SEND_REQUEST:
        return { ...state, [key]: { ...entryInit, ...state[key], loading: true } };
      case RECEIVE_RESPONSE:
        return { ...state, [key]: { loading: false, data: action.payload, error: "" } };
      case RECEIVE_ERROR:
        return { ...state, [key]: { loading: false, data: [], error: action.payload } };
  
      case ADD_ITEM:
        return {
          ...state,
          [key]: { ...state[key], data: [action.payload, ...state[key].data] },
        };
      case EDIT_ITEM:
        return {
          ...state,
          [key]: {
            ...state[key],
            data: state[key].data.map((i) =>
              i.id === action.payload.id ? action.payload : i
            ),
          },
        };
      case DELETE_ITEM:
        return {
          ...state,
          [key]: {
            ...state[key],
            data: state[key].data.filter((i) => i.id !== action.payload),
          },
        };
  
      default:
        return state;
    }
  };
  
  export default managment;
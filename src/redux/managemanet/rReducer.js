import { SEND_REQUEST, RECEIVE_RESPONSE, RECEIVE_ERROR } from "./rType";

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
        default:
            return state;
    }
};

export default managment;
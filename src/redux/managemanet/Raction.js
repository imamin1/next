import axios from "axios";
import { RECEIVE_ERROR, RECEIVE_RESPONSE, SEND_REQUEST } from "./rType";

const sendRequest = (key) => ({ type: SEND_REQUEST, key });
const receiveResponse = (key, data) => ({ type: RECEIVE_RESPONSE, key, payload: data });
const receiveError = (key, error) => ({ type: RECEIVE_ERROR, key, payload: error });

const getManagmentInfo = (key, url) => {
    return (dispatch) => {
        dispatch(sendRequest(key));
        axios
            .get(url)
            .then((res) => dispatch(receiveResponse(key, res.data)))
            .catch((error) => dispatch(receiveError(key, error.message)));
    };
};

export default getManagmentInfo;
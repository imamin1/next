import axios from "axios";
import {
  RECEIVE_ERROR,
  RECEIVE_RESPONSE,
  SEND_REQUEST,
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
} from "./rType";

const sendRequest = (key) => ({ type: SEND_REQUEST, key });
const receiveResponse = (key, data) => ({ type: RECEIVE_RESPONSE, key, payload: data });
const receiveError = (key, error) => ({ type: RECEIVE_ERROR, key, payload: error });

const getManagmentInfo = (key, url) => (dispatch) => {
  dispatch(sendRequest(key));
  axios
    .get(url)
    .then((res) => dispatch(receiveResponse(key, res.data)))
    .catch((error) => dispatch(receiveError(key, error.message)));
};

const addManagmentItem = (key, url, item) => (dispatch) => {
  axios
    .post(url, item)
    .then((res) => {
      const newItem = { ...res.data, id: Date.now() };
      dispatch({ type: ADD_ITEM, key, payload: newItem });
    })
    .catch((error) => dispatch(receiveError(key, error.message)));
};

const editManagmentItem = (key, url, item) => (dispatch) => {
  axios
    .put(`${url}/${item.id}`, item)
    .then(() => dispatch({ type: EDIT_ITEM, key, payload: item }))
    .catch((error) => dispatch(receiveError(key, error.message)));
};

const deleteManagmentItem = (key, url, id) => (dispatch) => {
  axios
    .delete(`${url}/${id}`)
    .then(() => dispatch({ type: DELETE_ITEM, key, payload: id }))
    .catch((error) => dispatch(receiveError(key, error.message)));
};

export {
  getManagmentInfo,
  addManagmentItem,
  editManagmentItem,
  deleteManagmentItem,
};
export default getManagmentInfo;
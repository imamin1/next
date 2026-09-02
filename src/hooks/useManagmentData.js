import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getManagmentInfo,
  addManagmentItem,
  editManagmentItem,
  deleteManagmentItem,
} from "../redux/managemanet/Raction";

function useManagmentData(key, url) {
  const dispatch = useDispatch();
  const state = useSelector((s) => s.managment[key]);

  useEffect(() => {
    dispatch(getManagmentInfo(key, url));
  }, [dispatch, key, url]);

  const addItem = useCallback(
    (item) => dispatch(addManagmentItem(key, url, item)),
    [dispatch, key, url]
  );
  const editItem = useCallback(
    (item) => dispatch(editManagmentItem(key, url, item)),
    [dispatch, key, url]
  );
  const deleteItem = useCallback(
    (id) => dispatch(deleteManagmentItem(key, url, id)),
    [dispatch, key, url]
  );

  return { ...(state ?? { loading: true, data: [], error: "" }), addItem, editItem, deleteItem };
}

export default useManagmentData;
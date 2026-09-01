import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getManagmentInfo from "../redux/managemanet/Raction";

function useManagmentData(key, url) {
    const dispatch = useDispatch();
    const state = useSelector((s) => s.managment[key]);

    useEffect(() => {
        dispatch(getManagmentInfo(key, url));
    }, [dispatch, key, url]);

    return state ?? { loading: true, data: [], error: "" };
}

export default useManagmentData;
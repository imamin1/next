import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyApple, buyOrange } from "../redux/fruit/fruitAction";
import { buysandwich } from "../redux/food/foodAction";

const MyStore = () => {
  const [itemCount, setItenCount] = useState({
    apple: 1,
    orange: 1,
    sandwich: 1,
  });
  const { apple, orange } = useSelector((state) => state.fruit);
  const { sandwich } = useSelector((state) => state.food);
  const dispatch = useDispatch();
  return (
    <div className="bg-gradient-to-br from-cyan-500 to-blue-500 h-screen flex flex-col self-center text-white">
      <h5 className="text-center mt-2">تعداد سیب ها : {apple}</h5>
      <h5 className="text-center mt-2">تعداد پرتغال ها : {orange}</h5>
      <h5 className="text-center mt-2">تعداد ساندویچ ها : {sandwich}</h5>
      <div className="flex justify-center text-center mt-3">
        <div className="flex">
          <input
            type="number"
            value={itemCount.apple}
            onChange={(e) =>
              setItenCount({ ...itemCount, apple: e.target.value })
            }
            className="bg-white text-black text-center rounded-lg"
          />
          <button
            className="btn text-white px-3 py-2 rounded-lg bg-gradient-to-b from-indigo-950 via-indigo-900 to-violet-900 mx-3"
            onClick={() => dispatch(buyApple(itemCount.apple))}
          >
            خرید سیب ({itemCount.apple})
          </button>
        </div>
        <div className="flex">
          <input
            type="number"
            value={itemCount.orange}
            onChange={(e) =>
              setItenCount({ ...itemCount, orange: e.target.value })
            }
            className="bg-white text-black text-center rounded-lg"
          />

          <button
            className="btn text-white px-3 py-2 rounded-lg bg-gradient-to-b from-indigo-950 via-indigo-900 to-violet-900 mx-3"
            onClick={() => dispatch(buyOrange(itemCount.ornage))}
          >
            خرید پرتغال ({itemCount.orange})
          </button>
        </div>
        <div className="flex">
          <input
            type="number"
            value={itemCount.sandwich}
            onChange={(e) =>
              setItenCount({ ...itemCount, sandwich: e.target.value })
            }
            className="bg-white text-black text-center rounded-lg"
          />

          <button
            className="btn text-white px-3 py-2 rounded-lg bg-gradient-to-b from-indigo-950 via-indigo-900 to-violet-900 mx-3"
            onClick={() => dispatch(buysandwich(itemCount.sandwich))}
          >
            خرید ساندویچ ({itemCount.sandwich})
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyStore;

import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import {buyApple ,buyOrange } from '../redux/fruit/fruitAction';
import { buysandwich } from '../redux/food/foodAction';


const MyStore = () => {
    const {apple , orange} = useSelector((state)=>state.fruit);
    const {sandwich} = useSelector((state)=>state.food);
    const dispatch = useDispatch();
    return (
        <div className='bg-gradient-to-br from-cyan-500 to-blue-500 h-screen flex flex-col self-center text-white'>
            <h5 className='text-center mt-2'>تعداد سیب ها : {apple}</h5>
            <h5 className='text-center mt-2'>تعداد پرتغال ها : {orange}</h5>
            <h5 className='text-center mt-2'>تعداد ساندویچ ها : {sandwich}</h5>
            <div className="text-center mt-3">
                <button className='btn text-white px-3 py-2 rounded-lg bg-gradient-to-b from-indigo-950 via-indigo-900 to-violet-900 mx-3' onClick={()=>dispatch(buyApple())}>خرید سیب</button>
                <button className='btn text-white px-3 py-2 rounded-lg bg-gradient-to-b from-indigo-950 via-indigo-900 to-violet-900 mx-3' onClick={()=>dispatch(buyOrange())}>خرید پرتغال</button>
                <button className='btn text-white px-3 py-2 rounded-lg bg-gradient-to-b from-indigo-950 via-indigo-900 to-violet-900 mx-3' onClick={()=>dispatch(buysandwich())}>خرید ساندویچ</button>
            </div>
        </div>
    );
};

export default MyStore;
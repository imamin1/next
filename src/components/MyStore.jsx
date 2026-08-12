import React from 'react';
import { connect } from 'react-redux';
import { buyApple, buyOrange } from '../redux/fruit/fruitAction';

const MyStore = ({ apple, orange, buyApple, buyOrange }) => {
    return (
        <div className='bg-gradient-to-br from-cyan-500 to-blue-500 h-screen flex flex-col self-center text-white'>
            <h5 className='text-center mt-2'>تعداد سیب ها : {apple}</h5>
            <h5 className='text-center mt-2'>تعداد پرتغال ها : {orange}</h5>
            <div className="text-center mt-3">
                <button className='btn text-white px-3 py-2 rounded-lg bg-gradient-to-b from-indigo-950 via-indigo-900 to-violet-900 mx-3' onClick={buyApple}>خرید سیب</button>
                <button className='btn text-white px-3 py-2 rounded-lg bg-gradient-to-b from-indigo-950 via-indigo-900 to-violet-900 mx-3' onClick={buyOrange}>خرید پرتغال</button>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        apple: state.apple,
        orange: state.orange
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buyApple: () => dispatch(buyApple()),
        buyOrange: () => dispatch(buyOrange())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyStore);
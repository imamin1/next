import moment from 'moment-jalaali';
import { useEffect, useState } from 'react';
import { data } from 'react-router-dom';


const weekDays = [
    'یکشنبه',
    'دوشنبه',
    'سه شنبه',
    'چهار شنبه',
    'پنج شنبه',
    'جمعه',
    'شنبه'
];
const yearMonth = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'ابان',
    'اذر',
    'دی',
    'بهمن',
    'اسفند',
]

const PersionDate = () => {
    const [date , setDate] = useState('')
    const [time , setTime] = useState('')



    useEffect(()=>{
        let m = moment()
        let finalDate = `${weekDays[m.day()]} ${m.jDate()} ${yearMonth[m.jMonth()]} ماه ${m.jYear()}`
        setDate(finalDate)
        setTime(m.format("hh:mm:ss"))
    },[])
    return (
        <div className='flex flex-col justify-center w-full items-center h-screen'>
            <span>{date}</span>
            <span>{time} ساعت</span>
        </div>
    );
};

export default PersionDate;
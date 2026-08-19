import React, { useState } from "react";
import PersionDate from "./PersionDate";
import { useDispatch, useSelector } from "react-redux";
import getWeatherInfo from "../redux/weather/weatherAction";

const Weather = () => {
  const { loading, data, error } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const hanleGetWeather = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    dispatch(getWeatherInfo(query));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-4 py-6 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-amber-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-15%] left-[-10%] w-80 h-80 bg-sky-500/20 rounded-full blur-3xl" />

      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl px-6 py-5 sm:px-8 sm:py-6">
        <form
          onSubmit={hanleGetWeather}
          className="flex items-center gap-2 mb-4"
        >
          <input
            type="text"
            dir="rtl"
            placeholder="نام شهر یا کشور"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-white/10 text-slate-100 placeholder-slate-400 text-sm rounded-xl px-4 py-2.5 outline-none border border-white/10 focus:border-amber-400/60 focus:bg-white/15 transition-colors"
          />
          <button
            type="submit"
            className="shrink-0 bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold text-sm rounded-xl px-4 py-2.5 transition-colors"
          >
            جستجو
          </button>
        </form>

        <div className="text-center mb-4">
          <h3 className="text-slate-400 text-xs tracking-wide">
            <PersionDate />
          </h3>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-10 gap-3">
            <div className="w-8 h-8 border-2 border-slate-600 border-t-amber-400 rounded-full animate-spin" />
            <span className="text-slate-400 text-sm">در حال دریافت اطلاعات...</span>
          </div>
        ) : data.main ? (
          <div className="flex flex-col items-center text-center">
            <span className="font-serif text-6xl sm:text-7xl text-slate-50 tracking-tight leading-none">
              {Math.round(data.main.temp)}°
            </span>
            <h1 className="mt-2 text-base sm:text-lg text-amber-300 font-medium">
              {data.weather[0].main}
            </h1>
            <p className="mt-1 text-slate-400 text-xs">{data.name}</p>

            <div className="w-full grid grid-cols-2 gap-3 mt-5">
              <div className="bg-white/5 rounded-xl px-4 py-2.5 border border-white/10">
                <p className="text-slate-400 text-xs">احساس واقعی</p>
                <p className="text-slate-100 text-base mt-0.5">
                  {Math.round(data.main.feels_like)}°
                </p>
              </div>
              <div className="bg-white/5 rounded-xl px-4 py-2.5 border border-white/10">
                <p className="text-slate-400 text-xs">رطوبت</p>
                <p className="text-slate-100 text-base mt-0.5">
                  {data.main.humidity}%
                </p>
              </div>
            </div>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center py-10 gap-2 text-center">
            <h3 className="text-rose-300 text-sm">نام شهر یا کشور را وارد کنید</h3>
            <p className="text-slate-500 text-xs">{error}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center py-10">
            <h3 className="text-slate-400 text-sm text-center">
              مکان مورد نظر را جستجو کنید
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
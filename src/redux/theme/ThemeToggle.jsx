import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/theme/darkModeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { darkmode } = useSelector((state) => state.darkmode);
  const isDark = darkmode === "dark";

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
        isDark ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center text-xs transition-transform duration-300 ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
};

export default ThemeToggle;

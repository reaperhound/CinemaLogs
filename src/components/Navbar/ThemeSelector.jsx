import { useEffect } from "react";
import { themeChange } from "theme-change";
import AcUnitIcon from "@mui/icons-material/AcUnit"; // Winter
import BedtimeIcon from "@mui/icons-material/Bedtime"; //Halloween
import HiveIcon from "@mui/icons-material/Hive"; //Bumblebee
import StyleIcon from "@mui/icons-material/Style"; // ThemesICons
import { useSelector } from "react-redux";
import { setTheme } from "../../features/currentTheme";
import { useDispatch } from "react-redux";

const ThemeSelector = () => {
  const themeValues = ["Bumblebee", "Halloween", "Winter"];
  useEffect(() => {
    themeChange(false);
  });

  // console.log(themeChange);

  const currentTheme = useSelector((state) => state.themeSlice);
  const dispatch = useDispatch()

  return (
    <div className="dropdown">
      <label
        tabIndex="0"
        className="btn m-1  bg-inherit border-none hover:bg-primary-focus"
      >
        <StyleIcon fontSize="large" className="hover:animate-wiggle"/>
      </label>
      <ul
        tabIndex="0"
        className="dropdown-content menu p-2 shadow bg-white rounded-box w-52"
      >
        <li className="bg-white text-yellow-500 hover:bg-yellow-500 hover:text-white">
          <button
            data-set-theme={themeValues[0].toLowerCase()}
            data-active-class="ACTIVECLASS"
            onClick={() => dispatch(setTheme(themeValues[0].toLowerCase()))}
          >
            <HiveIcon fontSize="large" />
            <a>{themeValues[0]}</a>
          </button>
        </li>
        <li className="bg-white text-gray-600 hover:bg-gray-600 hover:text-white">
          <button
            data-set-theme={themeValues[1].toLowerCase()}
            data-active-class="ACTIVECLASS"
            onClick={() => dispatch(setTheme(themeValues[1].toLowerCase()))}
          >
            <BedtimeIcon fontSize="large" />
            <a>{themeValues[1]}</a>
          </button>
        </li>
        <li className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white">
          <button
            data-set-theme={themeValues[2].toLowerCase()}
            data-active-class="ACTIVECLASS"
            onClick={() => dispatch(setTheme(themeValues[2].toLowerCase()))}
          >
            <AcUnitIcon fontSize="large" />
            <a>{themeValues[2]}</a>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ThemeSelector;

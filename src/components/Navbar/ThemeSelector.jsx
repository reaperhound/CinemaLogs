import { useEffect } from "react";
import { themeChange } from "theme-change";

const ThemeSelector = () => {
  const themeValues = ["Bumblebee", "Halloween", "Winter"];
  useEffect(() => {
    themeChange(false);
  });

  console.log(themeChange);
  return (
    <div className="h-10">
      <select
        className="select-md  px-6 border-none rounded-lg  text-error"
        data-choose-theme
      >
        {themeValues.map((theme) => (
          <option
            className="max-h-[60px]"
            key={theme.toLowerCase()}
            value={theme.toLowerCase()}
          >
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSelector;

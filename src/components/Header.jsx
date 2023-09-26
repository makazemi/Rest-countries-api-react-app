import { ThemeContext } from "../context/ThemeContext";
import React, { useContext } from "react";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="bg-white dark:bg-darkBlue flex justify-between py-4 px-4 md:px-12 shadow-lg ring-1 ring-black ring-opacity-5">
      <p className="text-veryDarkBlue dark:text-white">Where in the world?</p>
      <div className="flex space-x-2">
        {theme === "light" ? (
          <button onClick={toggleTheme}>
            <img className="w-5 h-5" src="images/icon-sun.svg" />
          </button>
        ) : (
          <button onClick={toggleTheme}>
            <img className="w-5 h-5" src="images/icon-moon.svg" />
          </button>
        )}
        <p className="text-veryDarkBlue dark:text-white">{theme} mode</p>
      </div>
    </div>
  );
}

export default Header;

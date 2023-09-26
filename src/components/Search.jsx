import { ThemeContext } from "../context/ThemeContext";
import React, { useContext, useState } from "react";

function Search({onSearchClick}) {
  const { theme } = useContext(ThemeContext);
  const [searchValue,setSearchValue]=useState("")
  function handleChangeText(event){
    setSearchValue(event.target.value)
  }
  return (
    <div className="bg-white dark:bg-darkBlue rounded-md py-2 px-8 flex items-center space-x-4 shadow-lg ring-1 ring-black ring-opacity-5">
      {theme === "light" ? (
        <button onClick={() =>{onSearchClick(searchValue)
        }}><img src="images/search-light.svg" className="w-4 h-4" /></button>
      ) : (
        <button onClick={() =>{onSearchClick(searchValue)
          }}><img src="images/search-dark.svg" className="w-4 h-4" /></button>
      )}
      <input
        type="text"
        value={searchValue}
        onChange={handleChangeText}
        className=" placeholder-darkGray dark:placeholder-white min-w-0 border-transparent  
            focus:border-transparent focus:ring-0 bg-white dark:bg-darkBlue text-veryDarkBlue dark:text-white"
        placeholder="search for a country..."
      />
    </div>
  );
}
export default Search;

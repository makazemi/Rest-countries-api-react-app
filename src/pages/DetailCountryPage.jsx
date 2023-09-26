import { Link } from "react-router-dom";
import React from "react";

function DetailCountryPage() {
  return (
    <div className="bg-veryLightGray dark:bg-veryDarkBlueBg px-4 md:px-12 py-8 md:py-12">
      <Link to="/">
        <button
          className="inline-flex items-center bg-white dark:bg-darkBlue rounded-md
            shadow-md px-8 py-2 text-veryDarkBlue dark:text-white space-x-2"
        >
          <img src="images/icon-sun.svg" className="w-5 h-5"/>
          <span>Back</span>
        </button>
      </Link>

      <div className="flex flex-col md:flex-row mt-12 space-y-8 md:space-y-0 md:space-x-20 md:items-center">
        <img
          src="https://flagcdn.com/w320/ax.png"
          className="w-full h-60 md:w-[35%] md:h-80"
        />
        <div className="flex flex-col space-y-12">
          <p className="text-veryDarkBlue dark:text-white font-bold text-xl">
            Belguim
          </p>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:justify-between text-veryDarkBlue dark:text-white">
            <div className="flex flex-col">
              <div className="inline-flex items-center space-x-2">
                <p className="font-semibold text-md">Native Name:</p>
                <p className="font-thin text-sm">Belgio</p>
              </div>

              <div className="inline-flex items-center space-x-2">
                <p className="font-semibold text-md">Population:</p>
                <p className="font-thin text-sm">81,770,900</p>
              </div>

              <div className="inline-flex items-center space-x-2">
                <p className="font-semibold text-md">Region:</p>
                <p className="font-thin text-sm">Europe</p>
              </div>

              <div className="inline-flex items-center space-x-2">
                <p className="font-semibold text-md">Sub Region:</p>
                <p className="font-thin text-sm">Western Europe</p>
              </div>

              <div className="inline-flex items-center space-x-2">
                <p className="font-semibold text-md">Capital:</p>
                <p className="font-thin text-sm">Berlin</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="inline-flex items-center space-x-2">
                <p className="font-semibold text-md">Top Level Domain:</p>
                <p className="font-thin text-sm">be</p>
              </div>

              <div className="inline-flex items-center space-x-2">
                <p className="font-semibold text-md">Currencies:</p>
                <p className="font-thin text-sm">Euro</p>
              </div>

              <div className="inline-flex items-center space-x-2">
                <p className="font-semibold text-md">Langaues:</p>
                <p className="font-thin text-sm">Dutch,French,German</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2 text-veryDarkBlue dark:text-white">
            <p>Border Countries:</p>

            <div className="flex flex-wrap space-x-2">
              <button
                className="bg-white dark:bg-darkBlue rounded-md py-2 px-8 flex items-center
                shadow-lg ring-1 ring-black ring-opacity-5 font-thin text-sm"
              >
                Franc
              </button>
              <button
                className="bg-white dark:bg-darkBlue rounded-md py-2 px-8 flex items-center
                shadow-lg ring-1 ring-black ring-opacity-5 font-thin text-sm"
              >
                Germany
              </button>
              <button
                className="bg-white dark:bg-darkBlue rounded-md py-2 px-8 flex items-center
                shadow-lg ring-1 ring-black ring-opacity-5 font-thin text-sm"
              >
                Netherland
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCountryPage;

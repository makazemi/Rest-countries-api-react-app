import Search from "../components/Search";
import Filter from "../components/Filter";
import CountryItem from "../components/CountryItem";
import React, { useState, useEffect, useReducer } from "react";
import Loading from "../components/Loading";
import countryReducer from "../reducer/countryReducer";

function Index() {
  const initialState = {
    countries: [],
    isLoading: false,
  };

  const [countryState, dispatch] = useReducer(countryReducer, initialState);

  async function getAllCountries() {
    dispatch({
      type: "set-loading",
    });
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      console.log("countries", data[0].capital[0]);
      dispatch({
        type: "get-country",
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "catch-error",
      });
    }
  }

  useEffect(() => {
    getAllCountries();
  }, []);

  function searchClick(search) {
    if (search !== "") {
      getCountryByName(search);
    }
  }

  function filterClick(value) {
    if (value != "") {
      getCountryByRegion(value);
    }
  }

  async function getCountryByName(name) {
    dispatch({
      type: "set-loading",
    });
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const data = await response.json();
      console.log("search result", data);
      dispatch({
        type: "get-country",
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "catch-error",
      });
    }
  }

  async function getCountryByRegion(region) {
    dispatch({
      type: "set-loading",
    });
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await response.json();
      console.log("filter by region", data);
      dispatch({
        type: "get-country",
        payload: data,
      });
    } catch (error) {
      console.log("error filter by region", error);
      dispatch({
        type: "catch-error",
      });
    }
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between mt-8 px-4 md:px-12 space-y-8 md:space-y-0">
        <Search onSearchClick={searchClick} />
        <Filter onFilterClick={filterClick} />
      </div>
      <div className="px-20 md:px-12 mt-8 md:grid md:grid-cols-4 md:gap-20 flex flex-col space-y-10 md:space-y-0">
        {countryState.isLoading ? (
          <Loading />
        ) : (
          countryState.countries.map((next) => <CountryItem item={next} />)
        )}
      </div>
    </>
  );
}
export default Index;

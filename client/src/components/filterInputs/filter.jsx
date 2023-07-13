import React, { useState, useEffect } from "react";
import Autocomplete from "react-autocomplete";

const FilterComponent = ({
  countries,
  continents,
  selectedCountry,
  selectedContinent,
  cityName,
  handleCountryChange,
  handleContinentChange,
  handleCityNameChange,
  handleSortBy,
  sortedBy,
  sortDirection,
}) => {
  const [countryInputValue, setCountryInputValue] = useState("");
  const [continentInputValue, setContinentInputValue] = useState("");

  useEffect(() => {
    setCountryInputValue(selectedCountry);
    setContinentInputValue(selectedContinent);
  }, [selectedCountry, selectedContinent]);

  const handleCountrySelect = (value) => {
    setCountryInputValue(value);
    handleCountryChange(value);
  };

  const handleContinentSelect = (value) => {
    setContinentInputValue(value);
    handleContinentChange(value);
  };

  const filterCountrySuggestions = (value) => {
    const filtered = countries.filter((country) =>
      country.toLowerCase().includes(value.toLowerCase())
    );
    return filtered;
  };

  const filterContinentSuggestions = (value) => {
    const filtered = continents.filter((continent) =>
      continent.toLowerCase().includes(value.toLowerCase())
    );
    return filtered;
  };

  const onChangeContinent = (value) => {
    setContinentInputValue(value);
    if (value === "") {
      handleContinentSelect("");
    }
  };

  const onChangeContries = (value) => {
    setCountryInputValue(value);
    if (value === "") {
      handleCountrySelect("");
    }
  };

  return (
    <div className="flex items-center justify-center mb-5">
      <div className="bg-white p-6 rounded shadow">
        <div className="flex items-center space-x-4">
          <div>
            <label className="block font-medium">City Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={cityName}
              onChange={handleCityNameChange}
              placeholder="Enter city name"
            />
          </div>
          <div>
            <label className="block font-medium">Country</label>
            <Autocomplete
              getItemValue={(item) => item}
              items={filterCountrySuggestions(countryInputValue)}
              renderItem={(item, isHighlighted) => (
                <div
                  className={`${
                    isHighlighted ? "bg-gray-100" : ""
                  } py-2 px-4 cursor-pointer`}
                >
                  {item}
                </div>
              )}
              value={countryInputValue}
              onChange={(e) => onChangeContries(e.target.value)}
              onSelect={handleCountrySelect}
              renderInput={(props) => (
                <input
                  {...props}
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter country name"
                />
              )}
              menuStyle={{
                position: "flex",
                maxHeight: "40px",
                overflowY: "auto",
              }}
            />
          </div>
          <div>
            <label className="block font-medium">Continent</label>
            <Autocomplete
              getItemValue={(item) => item}
              items={filterContinentSuggestions(continentInputValue)}
              renderItem={(item, isHighlighted) => (
                <div
                  className={`${
                    isHighlighted ? "bg-gray-100" : ""
                  } py-2 px-4 cursor-pointer`}
                >
                  {item}
                </div>
              )}
              value={continentInputValue}
              onChange={(e) => onChangeContinent(e.target.value)}
              onSelect={handleContinentSelect}
              renderInput={(props) => (
                <input
                  {...props}
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter continent name"
                />
              )}
              menuStyle={{
                position: "flex",
                maxHeight: "40px",
                overflowY: "auto",
              }}
            />
          </div>

          <div>
            <button
              className={`${
                sortedBy === "founded" ? "bg-blue-500" : "bg-gray-300"
              } text-white py-2 px-3 rounded flex items-center space-x-1 mt-5`}
              onClick={() => handleSortBy("founded")}
            >
              <span>Foundation</span>
              {sortedBy === "founded" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`h-4 w-4 ${
                    sortDirection === "asc" ? "transform rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              )}
            </button>
          </div>
          <div>
            <button
              className={`${
                sortedBy === "population" ? "bg-blue-500" : "bg-gray-300"
              } text-white py-2 px-3 rounded flex items-center space-x-1 mt-5`}
              onClick={() => handleSortBy("population")}
            >
              <span>Population</span>
              {sortedBy === "population" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`h-4 w-4 ${
                    sortDirection === "asc" ? "transform rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;

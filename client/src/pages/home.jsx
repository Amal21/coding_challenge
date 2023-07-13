import React, { useState, useEffect } from "react";
import Card from "../components/card/card";
import FilterComponent from "../components/filterInputs/filter";

function Home() {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("");
  const [cityName, setCityName] = useState("");

  const [sortedBy, setSortedBy] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    fetchCitiesData();
    fetchCountriesData().then(setCountries);

    fetchContinentsData();
  }, []);

  useEffect(() => {
    fetchCitiesData();
  }, [cityName, selectedCountry, selectedContinent, sortedBy, sortDirection]);

  const fetchCitiesData = () => {
    const queryParams = new URLSearchParams();
    queryParams.append("cityName", cityName);
    queryParams.append("country", selectedCountry);
    queryParams.append("continent", selectedContinent);
    queryParams.append("sortBy", sortedBy);
    queryParams.append("sortOrder", sortDirection);

    const url = `http://localhost:8000/cities?${queryParams.toString()}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setCities(data))
      .catch((error) => console.log(error));
  };

  const fetchCountriesData = () => {
    return fetch("http://localhost:8000/cities/countries")
      .then((response) => response.json())
      .catch((error) => {
        console.log("error", error);
        return [];
      });
  };

  const fetchContinentsData = () => {
    fetch("http://localhost:8000/cities/continents")
      .then((response) => response.json())
      .then((data) => setContinents(data))
      .catch((error) => console.log(error));
  };

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  const handleContinentChange = (value) => {
    setSelectedContinent(value);
  };

  const handleCityNameChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSortBy = (sortBy) => {
    if (sortBy === sortedBy) {
      // Toggle sort direction if the same column is clicked again
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // Sort by the selected column in ascending order by default
      setSortedBy(sortBy);
      setSortDirection("asc");
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-black mb-5 mt-5">
        Discover those cities!
      </h2>

      <FilterComponent
        countries={countries}
        continents={continents}
        selectedCountry={selectedCountry}
        selectedContinent={selectedContinent}
        cityName={cityName}
        handleCountryChange={handleCountryChange}
        handleContinentChange={handleContinentChange}
        handleCityNameChange={handleCityNameChange}
        handleSortBy={handleSortBy}
        sortedBy={sortedBy}
        sortDirection={sortDirection}
      />

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cities.map((city) => (
          <Card
            key={city.name}
            name={city.name}
            founded={Number(city.founded)}
            population={Number(city.population)}
            latitude={Number(city.latitude)}
            longitude={Number(city.longitude)}
            country={city.country}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

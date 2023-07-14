import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Map from "../components/map/map";

const CityDetails = () => {
  const { name } = useParams();
  const [cityDetails, setCityDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/cities/cityName/${name}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((data) => setCityDetails(data))
      .catch((error) => {
        setError(error.message);
      });
  }, [name]);

  if (error) {
    if (error === "404") {
      return (
        <div className="flex items-center justify-center mt-20">
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-lg font-bold text-red-600">
              No city found with the given name: {name}
            </p>
          </div>
        </div>
      );
    }

    return <div>Something went wrong</div>;
  }

  if (!cityDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 mt-10">
      <div className="w-full h-full bg-white rounded-l ">
        <Map
          latitude={Number(cityDetails.latitude)}
          longitude={Number(cityDetails.longitude)}
        />
      </div>
      <div className="w-full h-full bg-white rounded-l">
        <h2 className="text-2xl font-bold mb-2 text-center text-blue-400">
          {cityDetails.name}
        </h2>
        <p className="mb-2">
          <span className=" text-black font-semibold">Country: </span>{" "}
          {cityDetails.country}
        </p>
        <p className="mb-2">
          <span className=" text-black font-semibold">Continent: </span>{" "}
          {cityDetails.continent}
        </p>
        <p className=" mb-2">
          <span className=" text-black font-semibold">Population: </span>{" "}
          {cityDetails.population}
        </p>
        <p className=" mb-2">
          <span className=" text-black font-semibold">Founded: </span>{" "}
          {cityDetails.founded}
        </p>
        <h4 className="text-lg font-semibold mb-1">
          <span className=" text-black font-semibold"> Landmarks </span>
        </h4>
        <ul className="list-disc pl-6">
          {cityDetails.landmarks.map((landmark) => (
            <li key={landmark} className="text-black">
              {landmark}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CityDetails;

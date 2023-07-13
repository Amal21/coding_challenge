import React from "react";
import Map from "../map/map";
import { Link } from "react-router-dom";

const Card = ({ name, founded, population, latitude, longitude, country }) => {
  return (
    <div>
      <div className="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="overflow-hidden rounded-t-lg">
          <Map latitude={latitude} longitude={longitude} />
        </div>

        <div className="p-5 flex flex-col">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-500 dark:text-white text-center">
              {name}
            </h5>
          </a>
          <div className="flex flex-row space-x-2">
            <p className="text-left mb-2 text-sm text-black">
              <span className="text-black font-semibold">Population: </span>
              {population}
            </p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="text-left mb-2 text-sm text-black">
              {" "}
              <span className="text-black font-semibold">
                Foundation:{" "}
              </span>{" "}
              {founded}
            </p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="text-left mb-2 text-sm text-black">
              {" "}
              <span className="text-black font-semibold">Country: </span>
              {country}
            </p>
          </div>
          <div className="flex justify-center">
            {" "}
            {/* Added 'justify-center' class */}
            <Link to={`/city/${name}`}>
              <button
                type="button"
                className="py-2.5 px-5 mt-3 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                More details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import { Injectable } from '@nestjs/common';
import * as citiesData from '../data-source/cities.json';
import { CityDTO } from './dto/city.dto';
import { CityDetailsDTO } from './dto/city-details.dto';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class CitiesService {
  private readonly cities = citiesData.cities;

  filterCities(
    cityName: string,
    country: string,
    continent: string,
    sortBy: string,
    sortOrder?: 'asc' | 'desc',
  ): CityDTO[] {
    let filteredCities = this.cities;

    if (cityName && cityName.trim() !== '') {
      filteredCities = filteredCities.filter((city) =>
        city.name.toLowerCase().includes(cityName.toLowerCase()),
      );
    }

    if (country) {
      filteredCities = filteredCities.filter(
        (city) => city.country === country,
      );
    }

    if (continent) {
      filteredCities = filteredCities.filter(
        (city) => city.continent === continent,
      );
    }
    if (sortBy && sortOrder)
      filteredCities.sort((a, b) => {
        if (sortBy === 'population') {
          if (sortOrder === 'asc') {
            return Number(a.population) - Number(b.population);
          } else {
            return Number(b.population) - Number(a.population);
          }
        } else if (sortBy === 'founded') {
          if (sortOrder === 'asc') {
            return Number(a.founded) - Number(b.founded);
          } else {
            return Number(b.founded) - Number(a.founded);
          }
        } else {
          return 0;
        }
      });

    return filteredCities.map((city) => this.mapToCityDTO(city));
  }

  getAllContinents(): string[] {
    const continents = [...new Set(this.cities.map((city) => city.continent))];
    return continents.sort();
  }

  getAllCountries(): string[] {
    const countries = [...new Set(this.cities.map((city) => city.country))];
    return countries.sort();
  }

  getCityByName(name: string): CityDetailsDTO {
    const city = this.cities.find((city) => city.name === name);

    if (!city) {
      throw new NotFoundException('No city found with the given name');
    }
    return city;
  }

  mapToCityDTO(city: CityDetailsDTO): CityDTO {
    return {
      name: city.name,
      country: city.country,
      founded: city.founded,
      population: city.population,
      latitude: city.latitude,
      longitude: city.longitude,
    };
  }
}

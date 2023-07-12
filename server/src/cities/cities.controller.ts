import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CityDTO } from './dto/city.dto';
import { CityDetailsDTO } from './dto/city-details.dto';
import { SortOrder } from './dto/sort-order.enum';

@ApiTags('cities')
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @ApiOperation({ summary: 'Filter cities' })
  @ApiResponse({
    status: 200,
    description: 'Filtered cities',
    type: CityDTO,
    isArray: true,
  })
  @ApiQuery({ name: 'cityName', required: false, type: String })
  @ApiQuery({ name: 'country', required: false, type: String })
  @ApiQuery({ name: 'continent', required: false, type: String })
  @ApiQuery({ name: 'sortBy', required: false, type: String })
  @ApiQuery({ name: 'sortOrder', required: false, enum: SortOrder })
  @Get()
  filterCities(
    @Query('cityName') cityName: string,
    @Query('country') country: string,
    @Query('continent') continent: string,
    @Query('sortBy') sortBy: string,
    @Query('sortOrder') sortOrder?: 'asc' | 'desc',
  ): CityDTO[] {
    return this.citiesService.filterCities(
      cityName,
      country,
      continent,
      sortBy,
      sortOrder,
    );
  }

  @ApiOperation({ summary: 'Get all continents' })
  @ApiResponse({
    status: 200,
    description: 'List of all continents',
    type: String,
    isArray: true,
  })
  @Get('/continents')
  getAllContinents(): string[] {
    return this.citiesService.getAllContinents();
  }

  @ApiOperation({ summary: 'Get all countries' })
  @ApiResponse({
    status: 200,
    description: 'List of all countries',
    type: String,
    isArray: true,
  })
  @Get('/countries')
  getAllCountries(): string[] {
    return this.citiesService.getAllCountries();
  }

  @ApiOperation({ summary: 'Get city by name' })
  @ApiResponse({
    status: 200,
    description: 'City details',
    type: CityDetailsDTO,
  })
  @ApiResponse({
    status: 404,
    description: 'No city found with the given name',
  })
  @Get('/cityName/:cityName')
  getCityByName(@Param('cityName') cityName: string): CityDetailsDTO {
    return this.citiesService.getCityByName(cityName);
  }
}

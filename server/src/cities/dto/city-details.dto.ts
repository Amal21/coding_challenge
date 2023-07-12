import { ApiProperty } from '@nestjs/swagger';

export class CityDetailsDTO {
  @ApiProperty({ example: 'Munich', description: 'Name of the city' })
  name: string;

  @ApiProperty({ example: 'München', description: 'Native name of the city' })
  name_native: string;

  @ApiProperty({ example: 'Germany', description: 'Country of the city' })
  country: string;

  @ApiProperty({ example: 'Europe', description: 'Continent of the city' })
  continent: string;

  @ApiProperty({
    example: '48.1351',
    description: 'Latitude coordinates of the city',
  })
  latitude: string;

  @ApiProperty({
    example: '11.5820',
    description: 'Longitude coordinates of the city',
  })
  longitude: string;

  @ApiProperty({ example: '1000000', description: 'Population of the city' })
  population: string;

  @ApiProperty({ example: '1158', description: 'Year the city was founded' })
  founded: string;

  @ApiProperty({
    example: ['Marienplatz', 'Nymphenburg Palace'],
    description: 'Landmarks or points of interest in the city',
    isArray: true,
    type: String,
  })
  landmarks: string[];
}

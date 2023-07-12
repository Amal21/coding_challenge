import { ApiProperty } from '@nestjs/swagger';

export class CityDTO {
  @ApiProperty({ example: 'Munich', description: 'Name of the city' })
  name: string;

  @ApiProperty({ example: 'Germany', description: 'Country of the city' })
  country: string;

  @ApiProperty({ example: '1158', description: 'Year the city was founded' })
  founded: string;

  @ApiProperty({ example: '1472000', description: 'Population of the city' })
  population: string;

  @ApiProperty({ example: '-33.865143', description: 'latitude of the city' })
  latitude: string;

  @ApiProperty({ example: '151.209900', description: 'longitude of the city' })
  longitude: string;
}

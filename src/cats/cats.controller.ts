import { Controller, Get, Query } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats(@Query('breed_name') breed_name): Observable<AxiosResponse<[]>> {
    return this.catsService
      .getCats(breed_name)
      .pipe(map((response) => response.data));
  }
}

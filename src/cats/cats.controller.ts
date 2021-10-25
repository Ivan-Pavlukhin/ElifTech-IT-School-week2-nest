import { Controller, Get, Query } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { CatsService } from './cats.service';

interface Cat {
  id: string;
  name: string;
  dog_friendly: number;
}

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats(@Query('breed_name') breed_name): Observable<any> {
    return this.catsService.getCats(breed_name);
  }
}

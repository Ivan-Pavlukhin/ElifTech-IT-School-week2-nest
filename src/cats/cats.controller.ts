import { Controller, Get } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats(): Observable<AxiosResponse<[]>> {
    return this.catsService.getCats().pipe(map((response) => response.data));
  }
}

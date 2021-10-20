import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class CatsService {
  constructor(private readonly httpService: HttpService) {}

  getCats(): Observable<AxiosResponse<any>> {
    return this.httpService.get(
      'https://api.thecatapi.com/v1/breeds/search?q=bri&x-api-key=9a3464e6-e7be-4fff-a36b-d8a5267cd49e',
    );
  }
}

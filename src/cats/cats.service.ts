import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class CatsService {
  constructor(private readonly httpService: HttpService) {}

  private API_KEY = '9a3464e6-e7be-4fff-a36b-d8a5267cd49e';

  private BASS_URL = `https://api.thecatapi.com/v1/breeds/search?x-api-key=${this.API_KEY}`;

  getCats(breed_name): Observable<AxiosResponse<any>> {
    return this.httpService.get(`${this.BASS_URL}&q=${breed_name}`);
  }
}

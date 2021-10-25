import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { forkJoin, map, Observable } from 'rxjs';

interface Cat {
  id: string;
  name: string;
  dog_friendly: number;
}

@Injectable()
export class CatsService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  private API_KEY = this.configService.get<string>('API_KEY');

  private BASS_URL = `https://api.thecatapi.com/v1/breeds/search`;

  getCats(breed_name: string): Observable<AxiosResponse<Cat[]>> {
    const first = this.httpService.get(this.BASS_URL, {
      params: {
        'x-api-key': this.API_KEY,
        q: breed_name,
      },
    });
    const requests: any = forkJoin({
      FirstOwn: first.pipe(map((response) => response.data)),
      
    });

    return requests;
  }
}

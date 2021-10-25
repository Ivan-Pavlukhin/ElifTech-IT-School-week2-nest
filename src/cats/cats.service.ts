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

  private BASS_URL = 'http://f0a2-193-161-14-38.ngrok.io';

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

  getAll(): Observable<AxiosResponse<Cat[]>> {
    const first = this.httpService.get('https://3499-212-90-60-240.ngrok.io/');
    const second = this.httpService.get('http://bd4e-188-163-101-228.ngrok.io');
    const third = this.httpService.get('https://3d18-188-163-73-40.ngrok.io');
    const four = this.httpService.get('http://f0a2-193-161-14-38.ngrok.io');
    const five = this.httpService.get('http://cffa-46-219-240-124.ngrok.io/');

    const requests: any = forkJoin({
      Liza: first.pipe(map((response) => response.data)),
      Oleg: second.pipe(map((response) => response.data)),
      Nikita: third.pipe(map((response) => response.data)),
      Ivan: four.pipe(map((response) => response.data)),
      Lidiia: five.pipe(map((response) => response.data)),
    });
    return requests;
  }
}
// const subscribe = example.subscribe((val) => console.log(val));

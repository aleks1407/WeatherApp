import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

    getWeather(location: string) {
      return this.http.get(
        'http://api.weatherstack.com/current?access_key=e056cbcde89b6d91f2fbddd114582bb3&query=' + location
      );
    }
  }

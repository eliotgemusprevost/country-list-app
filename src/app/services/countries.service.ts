import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  readonly countriesGetUrl = 'https://restcountries.eu/rest/v2/all?fields=name;population;capital;region;flag';
  constructor(private httpClient:HttpClient) { }

  getAllCountries(){

    return this.httpClient.get(this.countriesGetUrl);
  }

}

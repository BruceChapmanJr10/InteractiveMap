import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient){}

   apiURL = 'http://api.worldbank.org/v2/country/';


   getCountryInfo(countryId: string) {
    return this.http.get(`${this.apiURL}${countryId}?format=json`).pipe(
      map((data: any) => {
        const countryData = data[1][0];
        return {
          name: countryData.name,
          capitalCity: countryData.capitalCity,
          region: countryData.region.value,
          incomeLevel: countryData.incomeLevel.value,
          latitude: countryData.latitude,
          longitude: countryData.longitude,
        };
      })
    );
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs'; 

import { IPropertyBase } from '../models/ipropertybase';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }

getAllProperties(SellRent: number): Observable<IPropertyBase[]> {
  return this.http.get('data/properties.json').pipe(
    map((data: any) => {
      const propertiesArray: Array<IPropertyBase> = [];

      for (const id in data) {
        if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
          propertiesArray.push(data[id]);
        }
      }
      return propertiesArray;
    })
  );
}


}

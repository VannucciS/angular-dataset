import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Add this line
import { Observable, map } from 'rxjs';
import { DataModel } from './models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  URL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { 

  }

  getData(): Observable<any>{
    return this.http.get<DataModel[]>(this.URL + 'dataset').pipe(map(res => res));
  }
}

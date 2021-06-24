import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapInterface } from '../interfaces/map_interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {
  }

  getMap(): Observable<MapInterface> {
    return this.http.get<MapInterface>('http://localhost:3000/map');
  }
}

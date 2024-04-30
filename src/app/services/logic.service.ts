import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData } from '../interfaces/data.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogicService {
    private dataUrl: string = "../assets/database/api.json"

    constructor(private http: HttpClient) { }

    getQuiz(): Observable<IData[]> {
      return this.http.get<IData[]>(this.dataUrl)
   }
}

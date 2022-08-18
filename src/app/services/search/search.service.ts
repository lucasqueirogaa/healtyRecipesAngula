import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  search(query: string) {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=7ae57fbf93a140998c4be9238a8060c8&query=${query}&number=10`;

    return this.http.get<any>(apiUrl);
  }
}

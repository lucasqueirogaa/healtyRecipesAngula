import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomRecipesService {
  constructor(private http: HttpClient) {}

  listRandomFood(take: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=7ae57fbf93a140998c4be9238a8060c8&number=${take}`;

    return this.http.get(apiUrl);
  }
}

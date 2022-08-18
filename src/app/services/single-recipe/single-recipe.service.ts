import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SingleRecipeService {
  constructor(private http: HttpClient) {}

  takeRecipe(id: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=7ae57fbf93a140998c4be9238a8060c8`;

    return this.http.get(apiUrl);
  }

  takeSimilarRecipe(id: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=7ae57fbf93a140998c4be9238a8060c8`;

    return this.http.get(apiUrl);
  }
}

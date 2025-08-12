import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeSearchResponse } from '../interfaces/recipe-search-response';
import { RecipeDetailsResponse } from '../interfaces/recipe-details-response';

@Injectable({
  providedIn: 'root'
})
export class Recipe {
  private baseUrl = 'https://forkify-api.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  searchRecipes(query: string): Observable<RecipeSearchResponse> {
    return this.http.get<RecipeSearchResponse>(`${this.baseUrl}/search?q=${query}`);
  }

  getRecipeDetails(id: string): Observable<RecipeDetailsResponse> {
    return this.http.get<RecipeDetailsResponse>(`${this.baseUrl}/get?rId=${id}`);
  }
}

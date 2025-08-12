import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Meal } from '../components/meals/meals';
import { RecipeSearchResponse } from '../interfaces/recipe-search-response';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  private baseUrl = 'https://forkify-api.herokuapp.com/api';

  // Different search terms for different meal categories (using valid Forkify API terms)
  private categorySearchTerms = {
    breakfast: ['toast', 'pancakes', 'croissant', 'chocolate'],
    lunch: ['salad', 'pizza', 'pasta', 'chicken'],
    dinner: ['steak', 'fish', 'beef', 'lamb'],
    dessert: ['cake', 'ice cream', 'donuts', 'chocolate']
  };

  constructor(private http: HttpClient) { }

  getAllMeals(): Observable<Meal[]> {
    // Get meals from all categories
    const breakfastMeals$ = this.getMealsByCategory('breakfast');
    const lunchMeals$ = this.getMealsByCategory('lunch');
    const dinnerMeals$ = this.getMealsByCategory('dinner');
    const dessertMeals$ = this.getMealsByCategory('dessert');

    return forkJoin([breakfastMeals$, lunchMeals$, dinnerMeals$, dessertMeals$]).pipe(
      map(([breakfast, lunch, dinner, dessert]) => [
        ...breakfast,
        ...lunch,
        ...dinner,
        ...dessert
      ])
    );
  }

  getMealsByCategory(category: string): Observable<Meal[]> {
    if (category === 'all') {
      return this.getAllMeals();
    }

    const searchTerms = this.categorySearchTerms[category as keyof typeof this.categorySearchTerms] || ['food'];
    const randomTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];

    return this.http.get<RecipeSearchResponse>(`${this.baseUrl}/search?q=${randomTerm}`).pipe(
      map(response => {
        if (!response.recipes || response.recipes.length === 0) {
          return [];
        }

        // Take first 4 recipes and transform them to meals
        return response.recipes.slice(0, 4).map((recipe, index) => ({
          id: parseInt(recipe.recipe_id) || index + 1,
          name: recipe.title,
          description: `Delicious ${category} meal by ${recipe.publisher}`,
          image: recipe.image_url || 'https://via.placeholder.com/300x200',
          price: this.generateRandomPrice(category),
          category: category
        }));
      })
    );
  }

  private generateRandomPrice(category: string): number {
    // Generate realistic prices based on meal category
    const priceRanges = {
      breakfast: { min: 8, max: 15 },
      lunch: { min: 12, max: 20 },
      dinner: { min: 18, max: 35 },
      dessert: { min: 6, max: 12 }
    };

    const range = priceRanges[category as keyof typeof priceRanges] || { min: 10, max: 20 };
    return Math.round((Math.random() * (range.max - range.min) + range.min) * 100) / 100;
  }
}

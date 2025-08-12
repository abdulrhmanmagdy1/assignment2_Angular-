import { Recipe } from './recipe';

export interface RecipeSearchResponse {
  count: number;
  recipes: Recipe[];
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealCardComponent } from './meal-card/meal-card';
import { MealsService } from '../../services/meals';

export interface Meal {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-meals',
  imports: [CommonModule, MealCardComponent],
  templateUrl: './meals.html',
  styleUrls: ['./meals.css']
})
export class Meals implements OnInit {
  selectedCategory: string = 'all';
  meals: Meal[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  categories = [
    { id: 'all', name: 'All Meals' },
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'lunch', name: 'Lunch' },
    { id: 'dinner', name: 'Dinner' },
    { id: 'dessert', name: 'Dessert' }
  ];

  constructor(private mealsService: MealsService) {}

  ngOnInit(): void {
    this.loadMeals();
  }

  loadMeals(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.mealsService.getMealsByCategory(this.selectedCategory).subscribe({
      next: (meals) => {
        this.meals = meals;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading meals from API:', error);
        this.errorMessage = 'Failed to load meals. Please try again.';
        this.isLoading = false;
        this.meals = [];
      }
    });
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.loadMeals(); // Reload meals when category changes
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe as RecipeService } from '../../services/recipe';
import { RecipeDetails } from '../../interfaces/recipe-details';

@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule, DecimalPipe],
  templateUrl: './recipe-detail.html',
  styleUrls: ['./recipe-detail.css']
})
export class RecipeDetail implements OnInit {
  recipe: RecipeDetails | null = null;
  isLoading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    const recipeId = this.route.snapshot.paramMap.get('id');
    if (recipeId) {
      this.loadRecipeDetails(recipeId);
    } else {
      this.errorMessage = 'Recipe ID not found';
      this.isLoading = false;
    }
  }

  loadRecipeDetails(id: string) {
    this.recipeService.getRecipeDetails(id).subscribe({
      next: (response) => {
        this.recipe = response.recipe;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading recipe details:', error);
        this.errorMessage = 'Error loading recipe details. Please try again.';
        this.isLoading = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

  openSourceUrl() {
    if (this.recipe?.source_url) {
      window.open(this.recipe.source_url, '_blank');
    }
  }
}

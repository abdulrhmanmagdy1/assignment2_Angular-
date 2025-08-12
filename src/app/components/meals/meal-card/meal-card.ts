import { Component, Input } from '@angular/core';
import { Meal } from '../meals';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.html',
  styleUrls: ['./meal-card.css']
})
export class MealCardComponent {
  @Input() meal!: Meal;
}

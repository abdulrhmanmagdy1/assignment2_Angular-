import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then(m => m.Home)
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about').then(m => m.About)
  },
  {
    path: 'meals',
    loadComponent: () => import('./components/meals/meals').then(m => m.Meals)
  },
  {
    path: 'team',
    loadComponent: () => import('./components/team/team').then(m => m.Team)
  },
  {
    path: 'recipe/:id',
    loadComponent: () => import('./components/recipe-detail/recipe-detail').then(m => m.RecipeDetail)
  },
  {
    path: 'contacts',
    loadComponent: () => import('./components/contacts/contacts').then(m => m.Contacts)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

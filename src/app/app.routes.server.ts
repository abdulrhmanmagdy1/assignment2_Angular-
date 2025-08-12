import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'recipe/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      try {
        const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=chicken');
        if (!response.ok) {
          console.error('API returned an error:', response.statusText);
          return [];
        }
        const recipes = await response.json();
        return recipes.recipes.map((recipe: { recipe_id: string }) => ({ id: recipe.recipe_id }));
      } catch (error) {
        console.error('Error fetching recipes:', error);
        return [];
      }
    }
  }
];

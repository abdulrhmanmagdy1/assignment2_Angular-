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
      const response = await fetch('https://your-api-endpoint.com/recipes');
      const recipes = await response.json();
      return recipes.map((recipe: { id: string }) => ({ id: recipe.id }));
    }
  }
];

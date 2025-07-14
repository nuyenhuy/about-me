import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'album',
    loadComponent: () => import("./features/album/album").then(m => m.Album)
  },

  {
    path: 'me',
    loadComponent: () => import("./features/me/me").then(m => m.Me)
  },

  {
    path: 'blog',
    loadComponent: () => import("./features/blog/blog").then(m => m.Blog)
  }
];

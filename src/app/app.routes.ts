import { Routes } from '@angular/router';
import {HomeLayout} from './layout/home-layout/home-layout';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'album',
  },
  {
    path: '',
    component: HomeLayout,
    children: [
      {
        path: 'album',
        loadComponent: () => import('./features/album/album').then(m => m.Album),
      },
      {
        path: 'me',
        loadComponent: () => import('./features/me/me').then(m => m.Me),
      },
      {
        path: 'blog',
        loadComponent: () => import('./features/blog/blog').then(m => m.Blog),
      },
      {
        path: 'three',
        loadComponent: () => import('./features/three/three').then(m => m.Three)
      }

    ]
  }
];

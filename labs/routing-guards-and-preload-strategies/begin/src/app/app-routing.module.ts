import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  {
    path: 'heroes',
    loadChildren: './heroes/heroes.module#HeroesModule'
  },
  {
    path: 'villains',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: './villains/villains.module#VillainsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroTopComponent }   from './components/hero-top/hero-top.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/hero-detail/hero-detail.component';
import { NewHeroComponent }  from './components/new-hero/new-hero.component';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';

const routes: Routes = [
  { path: '', redirectTo: '/topheroes', pathMatch: 'full' },
  { path: 'topheroes',  component: HeroTopComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'addhero',     component: NewHeroComponent },
  { path: 'edithero/:id',     component: EditHeroComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

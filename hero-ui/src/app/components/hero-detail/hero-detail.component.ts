import { Component, OnInit, Input } from '@angular/core';
import { Location }                 from '@angular/common';

import { Hero } from '../../models/hero.model';
import { HeroDetailService } from './hero-detail.service';
import { HeroesComponent } from '../heroes/heroes.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero : Hero;
  constructor(
    private location : Location,
    private heroDetailService : HeroDetailService,
    private heroesComponent : HeroesComponent,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.go("/heroes");
  }

  gotoDetail(): void {
    this.router.navigate(['/edithero', this.hero.id]);
  }
  

  delete(hero: Hero): void {
    this.heroDetailService
      .delete(hero).subscribe(hero => {
        this.hero = null;
        this.heroesComponent.getHeroes();
      });
  }
}

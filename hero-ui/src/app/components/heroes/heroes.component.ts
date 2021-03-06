import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../models/hero.model';
import { HeroService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  hero: Hero;
  selectedHero: Hero;
  ngOnInit(): void {
    this.getHeroes();
  }
  constructor(
    private heroService: HeroService,
    private router: Router) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(value => this.heroes = value as Hero[]);
      
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero).subscribe(hero => {
        this.getHeroes();
      });
  }
}

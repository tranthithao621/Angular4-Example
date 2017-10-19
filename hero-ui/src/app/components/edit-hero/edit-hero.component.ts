import { Component, OnInit, Input, Pipe } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location, DatePipe } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from '../../models/hero.model';
import { EditHeroService } from './edit-hero.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  hero : Hero;
  @Input() public date: Date;
  constructor(
    private newHeroService: EditHeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.hero = new Hero;
    this.route.paramMap
    .switchMap((params: ParamMap) => this.newHeroService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);
    console.log(this.hero);
  }

  editHero(form : NgForm) {
    if (this.hero) {
      this.newHeroService.update(this.hero).subscribe(
        value => {
          if (value) {
            this.hero = new Hero();
            this.location.back();
          }
        }
      );
    }
  }

}

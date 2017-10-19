import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { Hero } from '../../models/hero.model';
import { NewHeroService } from './new-hero.service';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {
  hero: Hero;
  constructor(private newheroService: NewHeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.hero = new Hero;

  }

  create(form : NgForm) {
    if (this.hero) {
      this.newheroService.create(this.hero).subscribe(
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

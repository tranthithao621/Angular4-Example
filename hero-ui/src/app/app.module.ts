import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule,Http } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroTopComponent } from './components/hero-top/hero-top.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './components/heroes/heroes.service';
import { NewHeroComponent } from './components/new-hero/new-hero.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { NewHeroService} from './components/new-hero/new-hero.service';
import { HeroDetailService } from './components/hero-detail/hero-detail.service';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';
import { EditHeroService } from './components/edit-hero/edit-hero.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroTopComponent,
    HeroCarouselComponent,
    HeaderComponent,
    NewHeroComponent,
    TestFormComponent,
    EditHeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HeroService,NewHeroService,HeroDetailService,EditHeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

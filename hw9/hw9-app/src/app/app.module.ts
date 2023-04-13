import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { WhyComponent } from './components/why/why.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhyCardComponent } from './components/why/why-card/why-card.component';
import { CountComponent } from './components/achievement/count/count.component';
import { ContentComponent } from './components/testimonial/content/content.component';
import { FooterColumnComponent } from './components/footer/footer-column/footer-column.component';
import { FooterBottomComponent } from './components/footer/footer-bottom/footer-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    WhyComponent,
    AchievementComponent,
    TestimonialComponent,
    CallToActionComponent,
    FooterComponent,
    WhyCardComponent,
    CountComponent,
    ContentComponent,
    FooterColumnComponent,
    FooterBottomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

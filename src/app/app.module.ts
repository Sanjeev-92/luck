import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
/*----list your component here ---*/
import { LuckBasedGameComponent } from 'src/components/luck-based-game/luck-based-game.component';

@NgModule({
  declarations: [
    AppComponent,
    LuckBasedGameComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

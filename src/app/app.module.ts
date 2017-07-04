import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayBoardComponent } from './play-board/play-board.component';
import { GameInfoComponent } from './game-info/game-info.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayBoardComponent,
    GameInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

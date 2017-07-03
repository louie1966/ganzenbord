import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent {
  private title: string;

  @Input()
  public infoMessage: string;

  constructor() {
    this.title = 'Ganzenbordspel';
  }
}

import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[];

  constructor() {
    this.players = [
      new Player('Computer Sais NO!')
    ];
  }

  ngOnInit() {
  }

}

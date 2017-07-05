import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Player} from '../player';

@Component({
  selector: 'player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
@Output() playerAdded = new EventEmitter<Player>();

addPlayer(name: string){
this.playerAdded.emit(new Player(name));
}
  constructor() { }

  ngOnInit() {
  }

}

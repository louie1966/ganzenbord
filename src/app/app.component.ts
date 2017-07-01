import { Component } from '@angular/core';

@Component({
  selector: 'ganzenbord',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title: string;
  boardImagePath: string;
  dice1Image: string;
  dice2Image: string;
  dice1Position: string;
  dice2Position: string;
  diceTop1: number;
  diceTop2: number;
  switchButtonModel: number;

  constructor() {
    this.title = 'Ganzenbordspel';
    this.boardImagePath = '../assets/img/ganzenbord.png';
    this.dice1Image = `../assets/img/${this.rndm(1, 6)}.png`;
    this.dice2Image = `../assets/img/${this.rndm(1, 6)}.png`;
    this.switchButtonModel = 0;
  }



  isStarted() {
    return false;
  }

  roleDices() {
    let dice1 = this.rndm(1, 6);
    let dice2 = this.rndm(1, 6);
    let count = dice1 + dice2;
    this.dice1Image = `../assets/img/${dice1}.png`;
    this.dice2Image = `../assets/img/${dice2}.png`;
    this.diceTop1 = this.rndm(290, 350);
    this.diceTop2 = this.rndm(290, 350);
  }

  rndm = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

}
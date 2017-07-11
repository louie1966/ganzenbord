import { Component, OnInit } from '@angular/core';
import { GameInfoComponent } from '../game-info/game-info.component';
import { Player } from '../player';
import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'play-board',
  templateUrl: './play-board.component.html',
  styleUrls: ['./play-board.component.css'],
  providers: [PlayerDataService]
})


export class PlayBoardComponent implements OnInit {

  boardImagePath: string;
  dice1Image: string;
  dice2Image: string;
  dice1Position: string;
  dice2Position: string;
  diceTop1: number;
  diceTop2: number;
  gameMessage: string;

  newPlayer: Player = new Player();


  constructor(private playerDataService: PlayerDataService) {
    this.boardImagePath = '../assets/img/ganzenbord.png';
    this.dice1Image = `../assets/img/${this.rndm(1, 6)}.png`;
    this.dice2Image = `../assets/img/${this.rndm(1, 6)}.png`;
    this.gameMessage = `Veel plezier! Vul even de namen in en click op een dobbelsteen.`;
  }

  addPlayer() {
    this.playerDataService.addPlayer(this.newPlayer);

    this.gameMessage = `Speler ${this.players.length}, ${this.newPlayer.name} is ingevoerd, ga spelen of voer nog een speler in.`
    this.newPlayer = new Player();
  }

  togglePlayerComplete(player) {
    this.playerDataService.togglePlayerComplete(player);
  }

  removePlayer(player) {
    this.playerDataService.deletePlayerById(player.id);
  }

  get players() {
    return this.playerDataService.getAllPlayers();
  }

  ngOnInit() { }


  isStarted() {
    return false;
  }

  public roleDices() {
    let dice1 = this.rndm(1, 6);
    let dice2 = this.rndm(1, 6);
    let count = (dice1 + dice2);
    this.dice1Image = `../assets/img/${dice1}.png`;
    this.dice2Image = `../assets/img/${dice2}.png`;
    this.diceTop1 = this.rndm(290, 350);
    this.diceTop2 = this.rndm(290, 350);
    let vertelHoeveel = 'Het is ' + count;
    let message;
    if (dice1 != dice2) {
      message = `Je hebt ${count} gegooid!`;
    }
    else {
      message = `Je hebt ${count} én dubbel gegooid! Je mag nog een keer!`;
    }
    this.gameMessage = message;
  }

  rndm = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;


}

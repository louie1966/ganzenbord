import { Injectable } from '@angular/core';
import { Player } from './player'

@Injectable()
export class PlayerDataService {

 // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for players's
  players: Player[] = [];

  constructor() {
  }

  // Simulate POST /players
  addPlayer(player: Player): PlayerDataService {
    if (!player.id) {
      player.id = ++this.lastId;
    }
    this.players.push(player);
    return this;
  }

  // Simulate DELETE /players/:id
  deletePlayerById(id: number): PlayerDataService {
    this.players = this.players
      .filter(player => player.id !== id);
    return this;
  }

  // Simulate PUT /players/:id
  updatePlayerById(id: number, values: Object = {}): Player {
    let player = this.getPlayerById(id);
    if (!player) {
      return null;
    }
    Object.assign(player, values);
    return player;
  }

  // Simulate GET /players
  getAllPlayers(): Player[] {
    return this.players;
  }

  // Simulate GET /players/:id
  getPlayerById(id: number): Player {
    return this.players
      .filter(player => player.id === id)
      .pop();
  }

  // Toggle player complete
  togglePlayerComplete(player: Player){
    let updatedPlayer = this.updatePlayerById(player.id, {
      complete: !player.active
    });
    return updatedPlayer;
  }
}

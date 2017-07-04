import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayBoardComponent } from './play-board.component';
import { GameInfoComponent } from '../game-info/game-info.component';

describe('PlayBoardComponent', () => {
  let component: PlayBoardComponent;
  let fixture: ComponentFixture<PlayBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayBoardComponent, GameInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

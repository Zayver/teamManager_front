import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerVisualizerComponent } from './player-visualizer.component';

describe('PlayerVisualizerComponent', () => {
  let component: PlayerVisualizerComponent;
  let fixture: ComponentFixture<PlayerVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerVisualizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

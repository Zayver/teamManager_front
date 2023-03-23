import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamVisualizerComponent } from './team-visualizer.component';

describe('TeamVisualizerComponent', () => {
  let component: TeamVisualizerComponent;
  let fixture: ComponentFixture<TeamVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamVisualizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

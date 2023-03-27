import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAdminComponent } from './team-admin.component';

describe('TeamAdminComponent', () => {
  let component: TeamAdminComponent;
  let fixture: ComponentFixture<TeamAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

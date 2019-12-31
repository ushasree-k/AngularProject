import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteertrackingComponent } from './volunteertracking.component';

describe('VolunteertrackingComponent', () => {
  let component: VolunteertrackingComponent;
  let fixture: ComponentFixture<VolunteertrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteertrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteertrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

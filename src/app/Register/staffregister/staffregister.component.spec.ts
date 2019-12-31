import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffregisterComponent } from './staffregister.component';

describe('StaffregisterComponent', () => {
  let component: StaffregisterComponent;
  let fixture: ComponentFixture<StaffregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

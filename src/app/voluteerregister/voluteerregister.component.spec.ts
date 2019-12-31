import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluteerregisterComponent } from './voluteerregister.component';

describe('VoluteerregisterComponent', () => {
  let component: VoluteerregisterComponent;
  let fixture: ComponentFixture<VoluteerregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluteerregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluteerregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

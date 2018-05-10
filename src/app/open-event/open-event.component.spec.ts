import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenEventComponent } from './open-event.component';

describe('OpenEventComponent', () => {
  let component: OpenEventComponent;
  let fixture: ComponentFixture<OpenEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

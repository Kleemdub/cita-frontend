import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchitComponent } from './watchit.component';

describe('WatchitComponent', () => {
  let component: WatchitComponent;
  let fixture: ComponentFixture<WatchitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

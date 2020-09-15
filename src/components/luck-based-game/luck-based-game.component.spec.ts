import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckBasedGameComponent } from './luck-based-game.component';

describe('LuckBasedGameComponent', () => {
  let component: LuckBasedGameComponent;
  let fixture: ComponentFixture<LuckBasedGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckBasedGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckBasedGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

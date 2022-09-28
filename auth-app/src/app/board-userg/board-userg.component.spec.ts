import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardUsergComponent } from './board-userg.component';

describe('BoardUsergComponent', () => {
  let component: BoardUsergComponent;
  let fixture: ComponentFixture<BoardUsergComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardUsergComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardUsergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

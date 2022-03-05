import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchHistoryComponent } from './church-history.component';

describe('ChurchHistoryComponent', () => {
  let component: ChurchHistoryComponent;
  let fixture: ComponentFixture<ChurchHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurchHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

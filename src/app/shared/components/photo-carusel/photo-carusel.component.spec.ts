import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCaruselComponent } from './photo-carusel.component';

describe('PhotoCaruselComponent', () => {
  let component: PhotoCaruselComponent;
  let fixture: ComponentFixture<PhotoCaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoCaruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

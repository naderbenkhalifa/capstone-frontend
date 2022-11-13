import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodfoundComponent } from './foodfound.component';

describe('FoodfoundComponent', () => {
  let component: FoodfoundComponent;
  let fixture: ComponentFixture<FoodfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

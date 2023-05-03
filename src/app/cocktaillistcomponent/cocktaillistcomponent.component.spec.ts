import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktaillistcomponentComponent } from './cocktaillistcomponent.component';

describe('CocktaillistcomponentComponent', () => {
  let component: CocktaillistcomponentComponent;
  let fixture: ComponentFixture<CocktaillistcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktaillistcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktaillistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

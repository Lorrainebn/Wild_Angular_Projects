import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleModelComponent } from './article-model.component';

describe('ArticleModelComponent', () => {
  let component: ArticleModelComponent;
  let fixture: ComponentFixture<ArticleModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

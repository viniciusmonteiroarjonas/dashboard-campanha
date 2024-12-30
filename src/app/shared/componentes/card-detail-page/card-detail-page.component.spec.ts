import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailPageComponent } from './card-detail-page.component';

describe('CardDetailPageComponent', () => {
  let component: CardDetailPageComponent;
  let fixture: ComponentFixture<CardDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDetailPageComponent]
    });
    fixture = TestBed.createComponent(CardDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

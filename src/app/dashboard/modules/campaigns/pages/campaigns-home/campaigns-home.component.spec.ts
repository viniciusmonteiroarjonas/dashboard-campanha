import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsHomeComponent } from './campaigns-home.component';

describe('CampaignsHomeComponent', () => {
  let component: CampaignsHomeComponent;
  let fixture: ComponentFixture<CampaignsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignsHomeComponent]
    });
    fixture = TestBed.createComponent(CampaignsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

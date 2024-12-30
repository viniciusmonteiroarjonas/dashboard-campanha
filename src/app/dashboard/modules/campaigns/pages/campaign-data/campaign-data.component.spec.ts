import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDataComponent } from './campaign-data.component';

describe('CampaignDataComponent', () => {
  let component: CampaignDataComponent;
  let fixture: ComponentFixture<CampaignDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaignDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

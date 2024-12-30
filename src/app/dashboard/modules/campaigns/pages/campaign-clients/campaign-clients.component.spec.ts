import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignClientsComponent } from './campaign-clients.component';

describe('CampaignClientsComponent', () => {
  let component: CampaignClientsComponent;
  let fixture: ComponentFixture<CampaignClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaignClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

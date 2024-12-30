import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignsHomeComponent } from './pages/campaigns-home/campaigns-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CampaignClientsComponent } from './pages/campaign-clients/campaign-clients.component';
import { CampaignDataComponent } from './pages/campaign-data/campaign-data.component';
import { CampaignDetailsComponent } from './pages/campaign-details/campaign-details.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    CampaignsHomeComponent,
    CampaignClientsComponent,
    CampaignDataComponent,
    CampaignDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HighchartsChartModule,
    CampaignsRoutingModule
  ]
})
export class CampaignsModule { }

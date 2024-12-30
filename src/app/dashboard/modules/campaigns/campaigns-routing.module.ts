import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignsHomeComponent } from './pages/campaigns-home/campaigns-home.component';
import { CampaignDetailsComponent } from './pages/campaign-details/campaign-details.component';
import { CampaignDataComponent } from './pages/campaign-data/campaign-data.component';
import { CampaignClientsComponent } from './pages/campaign-clients/campaign-clients.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignsHomeComponent
  },
  {
    path: 'dados/:campaignId/:subCampaignId',
    component: CampaignDataComponent
  },
  {
    path: 'detalhes/:campaignId/:subCampaignId',
    component: CampaignDetailsComponent
  },
  {
    path: 'clientes/:campaignId/:subCampaignId',
    component: CampaignClientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignsRoutingModule { }

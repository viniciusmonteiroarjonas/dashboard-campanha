import { Component } from '@angular/core';

@Component({
  selector: 'app-campaigns-home',
  templateUrl: './campaigns-home.component.html',
  styleUrls: ['./campaigns-home.component.scss']
})
export class CampaignsHomeComponent {
  breadcrumbs = [
    { name: 'Home', link: '/' },
    { name: 'Campanhas', link: '' }
  ];

  campaigns = [
    {
      id: 1,
      name: 'Vai de Visa',
      image: 'assets/img/visa.png',
      description: 'Campanha de incentivo para clientes Visa.',
      campaignId: '1',
      subCampaignId: '100'
    },
    {
      id: 2,
      name: 'Copa do Mundo',
      image: 'assets/img/visa.png',
      description: 'Campanha especial para a Copa do Mundo.',
      campaignId: '1',
      subCampaignId: '100'
    },
    {
      id: 3,
      name: 'Fórmula 1',
      image: 'assets/img/visa.png',
      description: 'Campanha exclusiva para fãs da Fórmula 1.',
      campaignId: '1',
      subCampaignId: '100'
    },
  ];
}

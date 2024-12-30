import { Component } from '@angular/core';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrl: './campaign-details.component.scss'
})
export class CampaignDetailsComponent {
  breadcrumbs = [
    { name: 'Home', link: '/' },
    { name: 'Campanhas', link: '/dashboard/campanhas' },
    { name: 'Detalhes', link: '' }
  ];
}

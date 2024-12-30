import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-detail-page',
  templateUrl: './card-detail-page.component.html',
  styleUrls: ['./card-detail-page.component.scss']
})
export class CardDetailPageComponent {
  @Input() cardTitle: string = '';
  @Input() cardIcon: string = '';
  @Input() cardLink: string = '';
  @Input() cardTextLink: string = '';
}

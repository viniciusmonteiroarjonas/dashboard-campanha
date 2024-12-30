import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Coluna {
  nome: string;
  chave: string;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() colunas: Coluna[] = [];
  @Input() dados: any[] = [];
  @Output() viewAction = new EventEmitter<void>();

  onView() {
    this.viewAction.emit();
  }

}

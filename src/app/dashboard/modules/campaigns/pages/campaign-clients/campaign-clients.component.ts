import { Component } from '@angular/core';
import { Coluna } from 'src/app/shared/interfaces/coluna.interface';

@Component({
  selector: 'app-campaign-clients',
  templateUrl: './campaign-clients.component.html',
  styleUrl: './campaign-clients.component.scss'
})
export class CampaignClientsComponent {
  breadcrumbs = [
    { name: 'Home', link: '/' },
    { name: 'Campanhas', link: '/dashboard/campanhas' },
    { name: 'Clientes', link: '' }
  ];

  colunas: Coluna[] = [
    { nome: 'Nome', chave: 'nome' },
    { nome: 'Email', chave: 'email' },
    { nome: 'Telefone', chave: 'telefone' }
  ];

  dados: any[] = [
    {
      nome: 'Mariana',
      email: 'mariane@gmail.com',
      telefone: '1197659-8786'
    },
    {
      nome: 'Jessica',
      email: 'jessica@gmail.com',
      telefone: '1197659-8786'
    },
    {
      nome: 'Lucas',
      email: 'lucas@gmail.com',
      telefone: '1197659-8786'
    },
    {
      nome: 'Felipe',
      email: 'felipe@gmail.com',
      telefone: '1197659-8786'
    },
    {
      nome: 'Alice',
      email: 'alice@gmail.com',
      telefone: '1197659-8786'
    },
  ];

  handleView(item: any) {
    console.log('View clicked for:', item);
  }

  handleDownload(item: any) {
    console.log('Download clicked for:', item);
  }

}
